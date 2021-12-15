export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantityInStock?: number;
  brand: string;
  productType?: string;
  pictureUrl: string;
}
