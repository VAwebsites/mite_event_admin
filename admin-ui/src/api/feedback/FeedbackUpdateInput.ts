import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type FeedbackUpdateInput = {
  event?: EventWhereUniqueInput | null;
  message?: string;
};
