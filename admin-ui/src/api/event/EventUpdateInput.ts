import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { EventRegistrationUpdateManyWithoutEventsInput } from "./EventRegistrationUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  branch?: BranchWhereUniqueInput;
  description?: string | null;
  endDate?: Date | null;
  eventRegistrations?: EventRegistrationUpdateManyWithoutEventsInput;
  img?: string | null;
  startDate?: Date | null;
  title?: string | null;
  venue?: string | null;
};
