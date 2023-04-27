import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type FeedbackCreateInput = {
  event?: EventWhereUniqueInput | null;
  message: string;
};
