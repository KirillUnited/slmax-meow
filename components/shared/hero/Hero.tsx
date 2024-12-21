import { title, subtitle } from "@/components/primitives";
import Products from "@/components/shared/product/Products";

export default function Hero() {
  return (
    <>
      <section className="section flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="container inline-block max-w-xl text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>your&nbsp;</span>
          <br />
          <span className={title()}>eCommerce.</span>
          <div className={subtitle({ class: "mt-4" })}>
            Everything you need to have a great shop.
          </div>
        </div>
      </section>
    </>
  );
}
