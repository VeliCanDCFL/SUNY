import test from 'node:test';
import assert from 'node:assert/strict';
import { filterMarketplaceItems, validateListingForm, MarketplaceItem } from './marketplace';

const sampleItems: MarketplaceItem[] = [
  {
    id: '1',
    title: 'University Plaza Bed & Desk',
    category: 'furniture',
    price: 120,
    location: 'University Plaza Bldg 3',
    condition: 'Good',
    description: 'Clean sturdy study desk and comfortable office chair, ready for fall arrival.',
    sellerName: 'Caner Y.',
    sellerMajor: "ITU-SUNY IE '24",
    sellerContact: 'caner@binghamton.edu',
    availableDate: 'Aug 15',
    imageIcon: 'couch',
  },
  {
    id: '2',
    title: 'Canada Goose Down Parka Size M',
    category: 'winter-gear',
    price: 350,
    location: 'Hayes Student Living',
    condition: 'Like New',
    description: 'Binghamton reaches -20C with lake-effect snow. Lifesaver for bus stops.',
    sellerName: 'Zeynep K.',
    sellerMajor: "ITU-SUNY CS '23",
    sellerContact: 'zeynep@binghamton.edu',
    availableDate: 'Immediate',
    imageIcon: 'snowflake',
  },
];

test('filterMarketplaceItems filters by category', () => {
  const result = filterMarketplaceItems(sampleItems, { category: 'winter-gear' });
  assert.equal(result.length, 1);
  assert.equal(result[0].id, '2');
});

test('filterMarketplaceItems searches query across title, description, and location', () => {
  const result = filterMarketplaceItems(sampleItems, { searchQuery: 'parka' });
  assert.equal(result.length, 1);
  assert.equal(result[0].category, 'winter-gear');

  const locResult = filterMarketplaceItems(sampleItems, { searchQuery: 'plaza' });
  assert.equal(locResult.length, 1);
  assert.equal(locResult[0].id, '1');
});

test('validateListingForm validates required fields correctly', () => {
  const invalid = validateListingForm({ title: 'A', price: -5 });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.title);
  assert.ok(invalid.errors.price);

  const valid = validateListingForm({
    title: 'Microwave oven 1000W',
    price: 35,
    location: 'UP Building 2',
    sellerContact: 'whatsapp: +905551234567',
    description: 'Very clean Emerson microwave, used only one year in dorm.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
