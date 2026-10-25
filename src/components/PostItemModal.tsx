import React, { useState, useEffect } from 'react';
import { MarketplaceItem, validateListingForm } from '../utils/marketplace';
import { X, Plus, AlertCircle, Sparkles } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface PostItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddItem: (newItem: MarketplaceItem) => void;
  lang?: Language;
}

export const PostItemModal: React.FC<PostItemModalProps> = ({
  isOpen,
  onClose,
  onAddItem,
  lang = 'tr',
}) => {
  const t = TRANSLATIONS[lang];
  const [formData, setFormData] = useState<Partial<MarketplaceItem>>({
    category: 'furniture',
    condition: 'Good',
    imageIcon: 'couch',
    location: 'University Plaza',
    availableDate: 'Immediate',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateListingForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    const newItem: MarketplaceItem = {
      id: `item-${Date.now()}`,
      title: formData.title!.trim(),
      category: (formData.category as any) || 'furniture',
      price: Number(formData.price),
      location: formData.location!.trim(),
      condition: (formData.condition as any) || 'Good',
      description: formData.description!.trim(),
      sellerName: formData.sellerName?.trim() || 'SUNY Student',
      sellerMajor: formData.sellerMajor?.trim() || "ITU-SUNY IE '25",
      sellerContact: formData.sellerContact!.trim(),
      availableDate: formData.availableDate || 'Immediate',
      imageIcon: (formData.imageIcon as any) || 'couch',
      featured: false,
    };

    onAddItem(newItem);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="post-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fade-in"
    >
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col transition-colors">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-white">
            <Plus className="w-4 h-4 text-[#005A43] dark:text-emerald-400" />
            <span>{lang === 'tr' ? 'İkinci El Eşya veya Oda İlanı Ver' : 'Post Second-Hand Item or Sublease'}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition"
            aria-label="Close post item dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              {lang === 'tr' ? 'İlan Başlığı' : 'Item Title'} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder={lang === 'tr' ? "örn. Çalışma Masası & Sandalye / Kışlık Parka L Beden" : "e.g. Study Desk & Chair / Winter Parka Size L"}
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none ${
                errors.title ? 'border-red-500 bg-red-50/30' : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#005A43]/30'
              }`}
            />
            {errors.title && (
              <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" /> {errors.title}
              </span>
            )}
          </div>

          {/* Category & Price */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {lang === 'tr' ? 'Kategori' : 'Category'}
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="furniture">{lang === 'tr' ? 'Mobilya & Ev' : 'Furniture & Home'}</option>
                <option value="winter-gear">{lang === 'tr' ? 'Kışlık Giysi' : 'Winter Gear & Coats'}</option>
                <option value="electronics">{lang === 'tr' ? 'Elektronik & Monitör' : 'Tech & Monitors'}</option>
                <option value="vehicles">{lang === 'tr' ? 'Öğrenci Arabası' : 'Student Cars'}</option>
                <option value="textbooks">{lang === 'tr' ? 'Ders Kitapları' : 'Textbooks & Notes'}</option>
                <option value="subleases">{lang === 'tr' ? 'Oda Devri (Sublease)' : 'Apartment Sublease'}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {lang === 'tr' ? 'Fiyat (USD $)' : 'Price (USD $)'} <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                min="0"
                placeholder="40"
                value={formData.price ?? ''}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none ${
                  errors.price ? 'border-red-500 bg-red-50/30' : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#005A43]/30'
                }`}
              />
            </div>
          </div>

          {/* Location & Condition */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {lang === 'tr' ? 'Teslim Yeri' : 'Pickup Location'} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. University Plaza Bldg 2 / Buffalo Amherst"
                value={formData.location || ''}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {lang === 'tr' ? 'Durumu' : 'Condition'}
              </label>
              <select
                value={formData.condition}
                onChange={(e) => setFormData({ ...formData, condition: e.target.value as any })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Like New">{lang === 'tr' ? 'Yeni Gibi' : 'Like New'}</option>
                <option value="Good">{lang === 'tr' ? 'İyi Durumda' : 'Good'}</option>
                <option value="Fair">{lang === 'tr' ? 'Kullanılabilir' : 'Fair'}</option>
                <option value="Brand New">{lang === 'tr' ? 'Sıfır / Kutulu' : 'Brand New'}</option>
              </select>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              {lang === 'tr' ? 'İletişim (WhatsApp veya Üniversite E-postası)' : 'Contact Info (WhatsApp or BU Email)'} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. WhatsApp: +90 532... / berkay@binghamton.edu"
              value={formData.sellerContact || ''}
              onChange={(e) => setFormData({ ...formData, sellerContact: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              {lang === 'tr' ? 'Açıklama' : 'Description'} <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              placeholder={lang === 'tr' ? "Ürün boyutu, kullanım süresi veya devir şartları..." : "Details about dimensions, condition, reason for selling..."}
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#005A43] hover:bg-emerald-900 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition shadow-md text-xs sm:text-sm flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>{lang === 'tr' ? 'İlanı Yayınla' : 'Publish Marketplace Listing'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
