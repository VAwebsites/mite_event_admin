import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { EventRegistrationUpdateManyWithoutEventsInput } from "./EventRegistrationUpdateManyWithoutEventsInput";
import { FeedbackUpdateManyWithoutEventsInput } from "./FeedbackUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  branch?: BranchWhereUniqueInput;
  description?: string | null;
  endDate?: Date | null;
  eventRegistrations?: EventRegistrationUpdateManyWithoutEventsInput;
  feedbacks?: FeedbackUpdateManyWithoutEventsInput;
  img?: string | null;
  startDate?: Date | null;
  title?: string | null;
  venue?: string | null;
};
