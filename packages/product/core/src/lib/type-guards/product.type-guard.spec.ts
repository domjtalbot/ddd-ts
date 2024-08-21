import {
  AffiliateProduct,
  BundleProduct,
  ConfigurableProduct,
  DigitalProduct,
  GroupProduct,
  StandardProduct,
} from '../domain';

import {
  isAffiliateProduct,
  isBundleProduct,
  isConfigurableProduct,
  isDigitalProduct,
  isGroupProduct,
  isStandardProduct,
} from './product.type-guard';

const mockAffiliateProduct = new AffiliateProduct({
  id: '1A2B',
  name: 'Affiliate Product',
  price: '100',
});

const mockBundleProduct = new BundleProduct({
  id: '2A2B',
  name: 'Bundle Product',
  price: '100',
});

const mockConfigurableProduct = new ConfigurableProduct({
  id: '3A2B',
  name: 'Configurable Product',
  price: '100',
});

const mockDigitalProduct = new DigitalProduct({
  id: '4A2B',
  name: 'Digital Product',
  price: '100',
  downloadLink: '//example.com/download.pdf',
});

const mockGroupProduct = new GroupProduct({
  id: '5A2B',
  name: 'Group Product',
  price: '100',
});

const mockStandardProduct = new StandardProduct({
  id: '6A2B',
  name: 'Standard Product',
  price: '100',
});

describe('Product Type-guards', () => {
  describe('isAffiliateProduct', () => {
    it('should return true for an instance of AffiliateProduct', () => {
      expect(isAffiliateProduct(mockAffiliateProduct)).toBe(true);
      expect(isAffiliateProduct(mockBundleProduct)).toBe(false);
      expect(isAffiliateProduct(mockConfigurableProduct)).toBe(false);
      expect(isAffiliateProduct(mockDigitalProduct)).toBe(false);
      expect(isAffiliateProduct(mockGroupProduct)).toBe(false);
      expect(isAffiliateProduct(mockStandardProduct)).toBe(false);
    });
  });

  describe('isBundleProduct', () => {
    it('should return true for an instance of BundleProduct', () => {
      expect(isBundleProduct(mockAffiliateProduct)).toBe(false);
      expect(isBundleProduct(mockBundleProduct)).toBe(true);
      expect(isBundleProduct(mockConfigurableProduct)).toBe(false);
      expect(isBundleProduct(mockDigitalProduct)).toBe(false);
      expect(isBundleProduct(mockGroupProduct)).toBe(false);
      expect(isBundleProduct(mockStandardProduct)).toBe(false);
    });
  });

  describe('isConfigurableProduct', () => {
    it('should return true for an instance of ConfigurableProduct', () => {
      expect(isConfigurableProduct(mockAffiliateProduct)).toBe(false);
      expect(isConfigurableProduct(mockBundleProduct)).toBe(false);
      expect(isConfigurableProduct(mockConfigurableProduct)).toBe(true);
      expect(isConfigurableProduct(mockDigitalProduct)).toBe(false);
      expect(isConfigurableProduct(mockGroupProduct)).toBe(false);
      expect(isConfigurableProduct(mockStandardProduct)).toBe(false);
    });
  });

  describe('isDigitalProduct', () => {
    it('should return true for an instance of DigitalProduct', () => {
      expect(isDigitalProduct(mockAffiliateProduct)).toBe(false);
      expect(isDigitalProduct(mockBundleProduct)).toBe(false);
      expect(isDigitalProduct(mockConfigurableProduct)).toBe(false);
      expect(isDigitalProduct(mockDigitalProduct)).toBe(true);
      expect(isDigitalProduct(mockGroupProduct)).toBe(false);
      expect(isDigitalProduct(mockStandardProduct)).toBe(false);
    });
  });

  describe('isGroupProduct', () => {
    it('should return true for an instance of GroupProduct', () => {
      expect(isGroupProduct(mockAffiliateProduct)).toBe(false);
      expect(isGroupProduct(mockBundleProduct)).toBe(false);
      expect(isGroupProduct(mockConfigurableProduct)).toBe(false);
      expect(isGroupProduct(mockDigitalProduct)).toBe(false);
      expect(isGroupProduct(mockGroupProduct)).toBe(true);
      expect(isGroupProduct(mockStandardProduct)).toBe(false);
    });
  });

  describe('isStandardProduct', () => {
    it('should return true for an instance of StandardProduct', () => {
      expect(isStandardProduct(mockAffiliateProduct)).toBe(false);
      expect(isStandardProduct(mockBundleProduct)).toBe(false);
      expect(isStandardProduct(mockConfigurableProduct)).toBe(false);
      expect(isStandardProduct(mockDigitalProduct)).toBe(false);
      expect(isStandardProduct(mockGroupProduct)).toBe(false);
      expect(isStandardProduct(mockStandardProduct)).toBe(true);
    });
  });
});
