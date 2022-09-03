import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCartRequest } from '../store/modules/cart/actions';

import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct;
}

export default function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch();

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
    </article>
  );
}
