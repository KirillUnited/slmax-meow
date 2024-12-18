import { ProductProps } from "@/components/ProductCard";

export async function getProducts() {
  return await fetch("https://fakestoreapi.com/products?limit=3").then((res) =>
    res.json(),
  );
}
export async function getProduct(id: ProductProps["id"]) {
  const products = await getProducts();
  const product = products.find((item: ProductProps) => item.id === id);

  return product;
}
export async function updateProduct(id: ProductProps["id"]) {
  await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}
