export interface Product {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
}

export interface ResponseProducts {
  items: Product[];
  total: number;
}

export interface ProductsParams {
  page: number;
  pageSize: number;
  orderBy: 'desc' | 'asc';
}

export interface Cart extends Product {
  quantity: number;
}
