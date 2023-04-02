import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventRegistrationUpdateInput = {
  event?: EventWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
