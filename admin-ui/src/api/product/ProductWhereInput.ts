import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  colors?: StringNullableFilter;
  description?: StringFilter;
  discountedPrice?: FloatNullableFilter;
  id?: StringFilter;
  images?: StringFilter;
  order?: OrderWhereUniqueInput;
  reviews?: ReviewListRelationFilter;
  title?: StringFilter;
  titleprice?: FloatFilter;
  variants?: StringNullableFilter;
};
