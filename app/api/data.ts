import { ProductProps } from "@/types";

export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=3");

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}
export async function getProductById(id: ProductProps["id"]) {
  const products = await getProducts();
  const product = products?.find((item: ProductProps) => item.id === id);

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
