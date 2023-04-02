import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventRegistrationWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
