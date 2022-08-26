import api from '@/services/api';
import { useEffect, useState } from 'react';

import { IProduct } from 'store/modules/cart/types';

export default function Catalog() {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('/products').then(({ data }) => {
      setCatalog(data);
    });
  }, []);

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> {' - '}
          <span>{product.price}</span> {'  '}
          <button type="button">Comprar</button>
        </article>
      ))}
    </main>
  );
}
