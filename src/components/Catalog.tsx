import api from '@/services/api';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from 'store/modules/cart/types';
import { addProductToCart } from '../store/modules/cart/actions';

export default function Catalog() {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('/products').then(({ data }) => {
      setCatalog(data);
    });
  }, []);

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> {' - '}
          <span>{product.price}</span> {'  '}
          <button onClick={() => handleAddProductToCart(product)} type="button">
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
}
