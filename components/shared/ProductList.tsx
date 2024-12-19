import React from "react";

import ProductCard from "./ProductCard";

import { ProductProps } from "@/types";

function ProductList({ products = [] }: { products: ProductProps[] }) {
  return (
    <>
      {(products?.length === 0 && (
        <p className="text-center text-lg font-bold text-gray-500">
          No products found
        </p>
      )) || (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ProductList;
