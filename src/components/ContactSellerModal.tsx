import React, { useEffect } from 'react';
import { MarketplaceItem } from '../utils/marketplace';
import { X, MessageCircle, Mail, MapPin, Tag, ShieldAlert, Sparkles } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ContactSellerModalProps {
  item: MarketplaceItem | null;
  onClose: () => void;
  currency: 'USD' | 'TRY';
  lang?: Language;
}

export const ContactSellerModal: React.FC<ContactSellerModalProps> = ({
  item,
  onClose,
  lang = 'tr',
}) => {
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const rawPhone = item.sellerPhone || (item.sellerContact.match(/\+?\d[\d\s-]{8,}/) ? item.sellerContact.match(/\+?\d[\d\s-]{8,}/)![0] : '');
  const cleanPhone = rawPhone.replace(/[^\d+]/g, '');

  const waMessage = encodeURIComponent(
    `Merhaba ${item.sellerName}! SUNY Hub üzerinde paylaştığınız "${item.title}" ilanınız için ulaşıyorum. Ürün hala müsait mi?`
  );

  const waLink = cleanPhone ? `https://wa.me/${cleanPhone.replace('+', '')}?text=${waMessage}` : null;

  const emailMatch = item.sellerContact.match(/[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}/);
  const sellerEmail = emailMatch ? emailMatch[0] : null;
  const mailtoLink = sellerEmail
    ? `mailto:${sellerEmail}?subject=${encodeURIComponent(`SUNY Hub: ${item.title}`)}&body=${waMessage}`
    : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fade-in"
    >
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.verifiedSenior}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition"
            aria-label="Close contact dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div>
            <div className="flex justify-between items-start gap-3 mb-2">
              <h3 id="contact-modal-title" className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                {item.title}
              </h3>
              <span className="text-lg font-black text-[#005A43] dark:text-emerald-400 whitespace-nowrap">
                ${item.price}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
              <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md font-medium text-slate-700 dark:text-slate-300">
                <MapPin className="w-3 h-3 text-slate-400" />
                {item.location}
              </span>
              <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md font-medium text-slate-700 dark:text-slate-300">
                <Tag className="w-3 h-3 text-slate-400" />
                {item.condition}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
              {item.description}
            </p>
          </div>

          {/* Seller Profile Card */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50">
            <div className="text-xs text-emerald-800 dark:text-emerald-400 font-bold uppercase tracking-wider mb-1">
              {lang === 'tr' ? 'Satıcı Bilgileri:' : 'Seller Profile:'}
            </div>
            <div className="font-extrabold text-slate-900 dark:text-white text-sm">{item.sellerName}</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">{item.sellerMajor}</div>
            <div className="text-xs text-slate-700 dark:text-slate-300 font-mono bg-white dark:bg-slate-900 p-2 rounded-lg border border-emerald-100 dark:border-slate-700 break-all">
              {item.sellerContact}
            </div>
          </div>

          {/* Direct Contact Buttons */}
          <div className="space-y-2.5">
            {waLink && (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 rounded-xl transition shadow-xs text-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.chatWhatsapp}</span>
              </a>
            )}

            {mailtoLink && (
              <a
                href={mailtoLink}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition text-xs"
              >
                <Mail className="w-4 h-4" />
                <span>{t.emailMailto}</span>
              </a>
            )}
          </div>

          {/* Safety Notice */}
          <div className="flex items-start gap-2 text-[11px] text-slate-500 dark:text-slate-400 bg-amber-50 dark:bg-amber-950/30 p-3 rounded-xl border border-amber-200 dark:border-amber-800/40">
            <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <span>{t.safetyTip}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
