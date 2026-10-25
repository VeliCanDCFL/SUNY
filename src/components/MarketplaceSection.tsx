import React, { useState, useEffect } from 'react';
import {
  MarketplaceItem,
  filterMarketplaceItems,
  MarketplaceFilter,
} from '../utils/marketplace';
import { INITIAL_MARKETPLACE_ITEMS } from '../data/marketplaceData';
import { ContactSellerModal } from './ContactSellerModal';
import { PostItemModal } from './PostItemModal';
import { USD_TO_TRY_RATE } from '../utils/calculator';
import { Language, TRANSLATIONS } from '../data/translations';
import {
  ShoppingBag,
  Plus,
  Search,
  MapPin,
  Tag,
  Bookmark,
  Armchair,
  Snowflake,
  Car,
  Laptop,
  BookOpen,
  Home,
  Coffee,
} from 'lucide-react';

interface MarketplaceSectionProps {
  currency: 'USD' | 'TRY';
  lang: Language;
}

export const MarketplaceSection: React.FC<MarketplaceSectionProps> = ({ currency, lang }) => {
  const [items, setItems] = useState<MarketplaceItem[]>(INITIAL_MARKETPLACE_ITEMS);
  const [filter, setFilter] = useState<MarketplaceFilter>({
    category: 'all',
    location: 'all',
    searchQuery: '',
  });

  const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(null);
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<string, boolean>>({});
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    try {
      const storedItems = localStorage.getItem('suny_marketplace_custom_items');
      if (storedItems) {
        const parsed = JSON.parse(storedItems);
        setItems([...parsed, ...INITIAL_MARKETPLACE_ITEMS]);
      }
      const storedBookmarks = localStorage.getItem('suny_marketplace_bookmarks');
      if (storedBookmarks) {
        setBookmarkedIds(JSON.parse(storedBookmarks));
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleAddItem = (newItem: MarketplaceItem) => {
    const updated = [newItem, ...items];
    setItems(updated);
    try {
      const customOnes = updated.filter(
        (i) => !INITIAL_MARKETPLACE_ITEMS.some((init) => init.id === i.id)
      );
      localStorage.setItem('suny_marketplace_custom_items', JSON.stringify(customOnes));
    } catch {
      // Ignore
    }
  };

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const next = { ...bookmarkedIds, [id]: !bookmarkedIds[id] };
    setBookmarkedIds(next);
    try {
      localStorage.setItem('suny_marketplace_bookmarks', JSON.stringify(next));
    } catch {
      // Ignore
    }
  };

  const filteredItems = filterMarketplaceItems(items, filter);

  const getItemIcon = (iconName: string) => {
    switch (iconName) {
      case 'couch':
        return <Armchair className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />;
      case 'snowflake':
        return <Snowflake className="w-8 h-8 text-teal-600 dark:text-teal-400" />;
      case 'car':
        return <Car className="w-8 h-8 text-blue-600 dark:text-blue-400" />;
      case 'laptop':
        return <Laptop className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />;
      case 'book':
        return <BookOpen className="w-8 h-8 text-amber-600 dark:text-amber-400" />;
      case 'home':
        return <Home className="w-8 h-8 text-rose-600 dark:text-rose-400" />;
      case 'coffee':
        return <Coffee className="w-8 h-8 text-orange-600 dark:text-orange-400" />;
      default:
        return <ShoppingBag className="w-8 h-8 text-slate-500" />;
    }
  };

  const formatPrice = (priceUSD: number) => {
    if (currency === 'TRY') {
      return `₺${Math.round(priceUSD * USD_TO_TRY_RATE).toLocaleString()}`;
    }
    return `$${priceUSD.toLocaleString()}`;
  };

  const categories = [
    { id: 'all', label: lang === 'tr' ? 'Tümü' : 'All Items' },
    { id: 'furniture', label: lang === 'tr' ? 'Mobilya' : 'Furniture' },
    { id: 'winter-gear', label: lang === 'tr' ? 'Kışlık Giysi' : 'Winter Gear' },
    { id: 'electronics', label: lang === 'tr' ? 'Elektronik & Bilgisayar' : 'Electronics' },
    { id: 'vehicles', label: lang === 'tr' ? 'Öğrenci Arabaları' : 'Cars' },
    { id: 'textbooks', label: lang === 'tr' ? 'Ders Kitapları' : 'Textbooks' },
    { id: 'subleases', label: lang === 'tr' ? 'Oda Devir / Sublease' : 'Subleases' },
  ];

  return (
    <section id="marketplace" className="bg-slate-50 dark:bg-slate-950/80 py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800 scroll-mt-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-[#005A43] dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800 mb-2">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{t.marketTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.marketTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
              {t.marketSub}
            </p>
          </div>

          <button
            onClick={() => setPostModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-[#005A43] hover:bg-emerald-900 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all active:scale-95 whitespace-nowrap self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>{t.btnPostItem}</span>
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs mb-8 space-y-3 transition-colors">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={filter.searchQuery || ''}
                onChange={(e) => setFilter({ ...filter, searchQuery: e.target.value })}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#005A43]/30"
              />
            </div>

            {/* Location Filter */}
            <div className="sm:w-48">
              <select
                value={filter.location || 'all'}
                onChange={(e) => setFilter({ ...filter, location: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm"
              >
                <option value="all">{t.allLocations}</option>
                <option value="University Plaza">University Plaza</option>
                <option value="Hayes">Hayes Living</option>
                <option value="Twin River">Twin River</option>
                <option value="Downtown">Downtown Binghamton</option>
                <option value="Vestal">Vestal Area</option>
                <option value="Buffalo">Buffalo / Amherst</option>
                <option value="New Paltz">New Paltz</option>
                <option value="Manhattan">Manhattan (NYC)</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter({ ...filter, category: cat.id })}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-semibold transition ${
                  (filter.category || 'all') === cat.id
                    ? 'bg-[#005A43] dark:bg-emerald-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Item Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 transition-colors">
            <ShoppingBag className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-white mb-1">
              {lang === 'tr' ? 'Eşleşen ilan bulunamadı' : 'No items found'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              {lang === 'tr' ? 'Filtreleri temizleyebilir veya yeni bir ilan ekleyebilirsiniz.' : 'Try adjusting your search query or category filters.'}
            </p>
            <button
              onClick={() => setFilter({ category: 'all', location: 'all', searchQuery: '' })}
              className="text-xs font-bold text-[#005A43] dark:text-emerald-400 underline"
            >
              {lang === 'tr' ? 'Tüm filtreleri sıfırla' : 'Reset all filters'}
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isBookmarked = Boolean(bookmarkedIds[item.id]);

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[#005A43]/50 dark:hover:border-emerald-500/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden cursor-pointer group"
                >
                  <div>
                    {/* Visual Card Banner */}
                    <div className="h-40 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-center relative">
                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-2xs group-hover:scale-105 transition-transform">
                        {getItemIcon(item.imageIcon)}
                      </div>

                      {/* Bookmark button */}
                      <button
                        onClick={(e) => toggleBookmark(item.id, e)}
                        className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-400 hover:text-amber-500 shadow-2xs transition"
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark item'}
                        aria-label="Bookmark listing"
                      >
                        <Bookmark
                          className={`w-4 h-4 ${
                            isBookmarked ? 'fill-amber-500 text-amber-500' : ''
                          }`}
                        />
                      </button>

                      {/* Condition badge */}
                      <div className="absolute bottom-3 left-3">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/95 dark:bg-slate-900/95 text-slate-700 dark:text-slate-300 shadow-2xs border border-slate-200/60 dark:border-slate-700">
                          {item.condition}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4">
                      <div className="flex justify-between items-start gap-2 mb-1.5">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-[#005A43] dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                          {item.title}
                        </h4>
                        <span className="font-extrabold text-[#005A43] dark:text-emerald-400 text-sm whitespace-nowrap">
                          {formatPrice(item.price)}
                        </span>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-3">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Strip */}
                  <div className="px-4 py-3 bg-slate-50/70 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate max-w-[150px]">
                      {t.bySeller} {item.sellerName}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(item);
                      }}
                      className="text-xs font-bold text-[#005A43] dark:text-emerald-400 hover:text-emerald-900 transition"
                    >
                      {t.contactSeller}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Seller Modal */}
      <ContactSellerModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        currency={currency}
        lang={lang}
      />

      {/* Post Modal */}
      <PostItemModal
        isOpen={postModalOpen}
        onClose={() => setPostModalOpen(false)}
        onAddItem={handleAddItem}
        lang={lang}
      />
    </section>
  );
};
