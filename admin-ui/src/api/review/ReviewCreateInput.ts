import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  product?: ProductWhereUniqueInput | null;
  rating: string;
  user: UserWhereUniqueInput;
};
