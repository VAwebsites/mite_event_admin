import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { EventRegistrationCreateNestedManyWithoutEventsInput } from "./EventRegistrationCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  branch: BranchWhereUniqueInput;
  description?: string | null;
  endDate?: Date | null;
  eventRegistrations?: EventRegistrationCreateNestedManyWithoutEventsInput;
  img?: string | null;
  startDate?: Date | null;
  title?: string | null;
  venue?: string | null;
};
