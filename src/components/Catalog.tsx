import { useSelector } from 'react-redux';

export default function Catalog() {
  const store = useSelector((state) => state);

  console.log('store: ', store);

  return <h1>Catalog</h1>;
}
