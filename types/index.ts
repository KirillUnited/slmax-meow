import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export type ProductProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};
