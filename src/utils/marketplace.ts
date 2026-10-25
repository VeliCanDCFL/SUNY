export interface MarketplaceItem {
  id: string;
  title: string;
  titleTr?: string;
  category: 'furniture' | 'winter-gear' | 'vehicles' | 'electronics' | 'textbooks' | 'subleases';
  price: number;
  location: string;
  condition: 'Brand New' | 'Like New' | 'Good' | 'Fair';
  description: string;
  descriptionTr?: string;
  sellerName: string;
  sellerMajor: string;
  sellerContact: string;
  sellerPhone?: string;
  availableDate: string;
  imageIcon: 'couch' | 'snowflake' | 'car' | 'laptop' | 'book' | 'home' | 'lamp' | 'coffee';
  featured?: boolean;
}

export interface MarketplaceFilter {
  category?: string;
  location?: string;
  searchQuery?: string;
  maxPrice?: number;
}

export function filterMarketplaceItems(
  items: MarketplaceItem[],
  filter: MarketplaceFilter
): MarketplaceItem[] {
  return items.filter((item) => {
    if (filter.category && filter.category !== 'all' && item.category !== filter.category) {
      return false;
    }
    if (filter.location && filter.location !== 'all') {
      const locMatch = item.location.toLowerCase().includes(filter.location.toLowerCase());
      if (!locMatch) return false;
    }
    if (filter.maxPrice !== undefined && filter.maxPrice > 0) {
      if (item.price > filter.maxPrice) return false;
    }
    if (filter.searchQuery && filter.searchQuery.trim() !== '') {
      const q = filter.searchQuery.toLowerCase().trim();
      const inTitle = item.title.toLowerCase().includes(q) || (item.titleTr && item.titleTr.toLowerCase().includes(q));
      const inDesc = item.description.toLowerCase().includes(q) || (item.descriptionTr && item.descriptionTr.toLowerCase().includes(q));
      const inLoc = item.location.toLowerCase().includes(q);
      const inSeller = item.sellerName.toLowerCase().includes(q);
      if (!inTitle && !inDesc && !inLoc && !inSeller) return false;
    }
    return true;
  });
}

export function validateListingForm(data: Partial<MarketplaceItem>): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.title || data.title.trim().length < 4) {
    errors.title = 'Title must be at least 4 characters long';
  }
  if (data.price === undefined || isNaN(Number(data.price)) || Number(data.price) < 0) {
    errors.price = 'Please enter a valid non-negative price';
  }
  if (!data.location || data.location.trim().length < 2) {
    errors.location = 'Please specify where item can be picked up (e.g. UP Bldg 3)';
  }
  if (!data.sellerContact || data.sellerContact.trim().length < 5) {
    errors.sellerContact = 'Please provide contact info (WhatsApp, ITU or Binghamton email)';
  }
  if (!data.description || data.description.trim().length < 10) {
    errors.description = 'Please write a brief description (min 10 characters)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
