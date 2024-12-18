import React from 'react';
import ProductCard, { ProductProps } from './ProductCard';
import { Button } from "@nextui-org/button";
import { button as buttonStyles } from "@nextui-org/theme";
import { getProduct, updateProduct } from '@/lib/getData';

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