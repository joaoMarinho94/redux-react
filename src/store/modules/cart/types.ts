export interface IProduct {
  id: string;
  title: string;
  price: string;
}

export interface ICartItem {
  product: IProduct;
  price: string;
}

export interface ICartState {
  items: ICartItem[];
}
