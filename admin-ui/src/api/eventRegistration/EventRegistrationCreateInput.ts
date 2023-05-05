import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventRegistrationCreateInput = {
  event: EventWhereUniqueInput;
  feedback?: string | null;
  isAttended?: boolean | null;
  user: UserWhereUniqueInput;
};
