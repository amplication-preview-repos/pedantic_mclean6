import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "rating";

export const ReviewTitle = (record: TReview): string => {
  return record.rating?.toString() || String(record.id);
};
