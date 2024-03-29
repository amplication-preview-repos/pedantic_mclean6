import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors?: string | null;
  description?: string;
  discountedPrice?: number | null;
  images?: string;
  order?: OrderWhereUniqueInput | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  title?: string;
  titleprice?: number;
  variants?: string | null;
};
