/* eslint-disable prettier/prettier */
/* eslint-disable indent */

import { AxiosResponse } from 'axios';
import {
 all, takeLatest, select, call, put
} from 'redux-saga/effects';
import api from '@/services/api';
import { IState } from '../../index';

import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess
} from './actions';
import { ActionCardTypes } from './types';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select(
    (state: IState) => state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
  );

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest(ActionCardTypes.addProductToCartRequest, checkProductStock)
]);
