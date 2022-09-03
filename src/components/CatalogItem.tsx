/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from 'store';

import { addProductToCartRequest } from '../store/modules/cart/actions';

import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct;
}

export default function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>((state) =>
    state.cart.failedStockCheck.includes(product.id)
  );

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span> {'  '}
      <button onClick={handleAddProductToCart} type="button">
        Comprar
      </button>
      {hasFailedStockCheck && (
        <span style={{ color: 'red' }}>Falta de estoque</span>
      )}
    </article>
  );
}
