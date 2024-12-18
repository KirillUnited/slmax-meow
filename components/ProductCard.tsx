import React from 'react'
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import Link from 'next/link';
import { title } from './primitives';

export type ProductProps = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

function ProductCard({ product }: { product: ProductProps }) {
    return (
        <Card className="h-full">
            <CardHeader className="flex flex-col items-stretch gap-3">
                <Image
                    alt={product.title}
                    radius="sm"
                    src={product.image}
                    width={'100%'}
                    classNames={{
                        img: 'object-cover object-top aspect-video max-h-48',
                    }}
                />
                <div className="flex flex-col">
                    <p className={"text-lg font-bold truncate"}>{product.title}</p>
                    <p className="text-small text-default-500">{product.category}</p>
                </div>
            </CardHeader>
            <CardBody>
                <p className={title({ color: "green", size: "sm" })}>{product.price}</p>
            </CardBody>
            <CardBody>
                <p className='line-clamp-3 font-light'>{product.description}</p>
            </CardBody>
            <CardFooter className='pt-6'>
                <Button as={Link} href={`/products/${product.id}`} className={buttonStyles({ color: "primary" })}>Learn more</Button>
            </CardFooter>
        </Card>
    )
}

export default ProductCard