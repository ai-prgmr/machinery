import { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Precision Equipment | Precision RollCo",
  description:
    "Explore our core precision rolling paper manufacturing equipment. Industry-leading machinery engineered for excellence and built for reliability.",
};

export default function Products() {
  return <ProductsClient />;
}
