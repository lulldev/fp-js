import * as R from 'ramda';

export const formatProducts = (products: Product[]): string => products.map(product => product.name).join(' | ');

export interface Product {
  name: string;
  active: boolean;
}

export const activateAllProducts = (products: Product[]): Product[] => products.map(product => {
  product.active = true;
  return product;
});


export const processProducts = R.pipe(activateAllProducts, formatProducts);