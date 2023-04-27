import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { EventRegistrationCreateNestedManyWithoutEventsInput } from "./EventRegistrationCreateNestedManyWithoutEventsInput";
import { FeedbackCreateNestedManyWithoutEventsInput } from "./FeedbackCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  branch: BranchWhereUniqueInput;
  description?: string | null;
  endDate?: Date | null;
  eventRegistrations?: EventRegistrationCreateNestedManyWithoutEventsInput;
  feedbacks?: FeedbackCreateNestedManyWithoutEventsInput;
  img?: string | null;
  startDate?: Date | null;
  title?: string | null;
  venue?: string | null;
};
