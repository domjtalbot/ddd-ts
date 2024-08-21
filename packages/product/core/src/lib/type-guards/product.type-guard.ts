import type { Product } from '../domain';

import {
  AffiliateProduct,
  BundleProduct,
  ConfigurableProduct,
  DigitalProduct,
  GroupProduct,
  StandardProduct,
} from '../domain';

export function isAffiliateProduct(
  product: Product
): product is AffiliateProduct {
  return product instanceof AffiliateProduct;
}

export function isBundleProduct(product: Product): product is BundleProduct {
  return product instanceof BundleProduct;
}

export function isConfigurableProduct(
  product: Product
): product is ConfigurableProduct {
  return product instanceof ConfigurableProduct;
}

export function isDigitalProduct(product: Product): product is DigitalProduct {
  return product instanceof DigitalProduct;
}

export function isGroupProduct(product: Product): product is GroupProduct {
  return product instanceof GroupProduct;
}

export function isStandardProduct(
  product: Product
): product is StandardProduct {
  return product instanceof StandardProduct;
}
