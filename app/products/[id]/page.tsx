import { Button } from "@nextui-org/button";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import { ProductProps } from "@/components/ProductCard";
import { subtitle, title } from "@/components/primitives";
import { getProduct, getProducts } from "@/lib/getData";

type ProductPageProps = {
  id: string;
};

export const revalidate = 10;
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<ProductPageProps>;
}) {
  const { id } = await params;
  const product = await getProduct(Number(id));

  return {
    title: product?.title,
    description: product?.description,
  };
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product: ProductProps) => ({
    id: String(product?.id),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<ProductPageProps>;
}) {
  const { id } = await params;
  const product = await getProduct(Number(id));

  return (
    <section className="py-8">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt="Product cover"
                className="object-cover object-top"
                height={400}
                shadow="md"
                src={product?.image}
                width="100%"
              />
            </div>

            <div className="flex flex-col gap-6 col-span-6 md:col-span-8">
              <div className="flex flex-col gap-2 flex-grow">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-foreground/90">
                    {product?.category}
                  </h3>
                  <p className={title({ color: "green" })}>{product?.price}</p>
                  <h1 className={subtitle()}>{product?.title}</h1>
                </div>
                <p>{product?.description}</p>
              </div>
              <Button
                className={buttonStyles({ color: "primary", fullWidth: true })}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
