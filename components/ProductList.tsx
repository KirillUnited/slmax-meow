import React from 'react';
import ProductCard, { ProductProps } from './ProductCard';

function ProductList({ products = [] }: { products: ProductProps[] }) {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                products?.map(product => (
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li>
                ))
            }
        </ul>
    )
}

export default ProductList