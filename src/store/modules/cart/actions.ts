import { ActionCardTypes, IProduct } from './types';

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionCardTypes.addProductToCartRequest,
    payload: { product }
  };
}
export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionCardTypes.addProductToCartSuccess,
    payload: { product }
  };
}
export function addProductToCartFailure(productId: number) {
  return {
    type: ActionCardTypes.addProductToCartFailure,
    payload: { productId }
  };
}
