import {
  Button,
} from "@mui/material";
import React from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <>
			<ProductList products={products} />
      <Button variant='contained' onClick={addProduct}>Add product</Button>
    </>
  );
}
