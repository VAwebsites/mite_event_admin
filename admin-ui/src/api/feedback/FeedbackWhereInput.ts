import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FeedbackWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  message?: StringFilter;
};
