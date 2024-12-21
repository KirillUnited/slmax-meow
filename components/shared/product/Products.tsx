import React, { Suspense } from "react";

import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductList from "./ProductList";

import { getProducts } from "@/app/api/data";

async function Products() {
  const products = await getProducts();

  return (
    <section className="section py-8">
      <div className="container">
        <Suspense fallback={<ProductCardSkeleton />}>
          <ProductList products={products} />
        </Suspense>
      </div>
    </section>
  );
}

export default Products;
