/* eslint-disable no-fallthrough */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable implicit-arrow-linebreak */

import { Reducer } from 'redux';
import produce from 'immer';

import { ActionCardTypes, ICartState } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: []
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionCardTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1
          });
        }

        return draft;
      }
      case ActionCardTypes.addProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productId);
      }

      default:
        return draft;
    }
  });

export default cart;
