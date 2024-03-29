import { Category } from "../category/Category";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  category?: Category | null;
  colors: string | null;
  createdAt: Date;
  description: string;
  discountedPrice: number | null;
  id: string;
  images: string;
  order?: Order | null;
  reviews?: Array<Review>;
  title: string;
  titleprice: number;
  updatedAt: Date;
  variants: string | null;
};
