import { title, subtitle } from "@/components/primitives";
import ProductList from "@/components/ProductList";
import { getProducts } from "@/lib/getData";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>your&nbsp;</span>
          <br />
          <span className={title()}>
            eCommerce.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Everything you need to have a great shop.
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <ProductList products={products} />
        </div>
      </section>
    </>
  );
}