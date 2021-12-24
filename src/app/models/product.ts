// export interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   quantityInStock?: number;
//   brand: string;
//   productType?: string;
//   pictureUrl: string;
// }
// declare module namespace {
  export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantityInStock: number;
    brand: string;
    productType: string;
    pictureUrl: string;
  }
  export interface Data {
    id: string;
    type: string;
    attributes: Product;
  }

  // export interface RootObject {
  //   data: Data;
  // }
// }
