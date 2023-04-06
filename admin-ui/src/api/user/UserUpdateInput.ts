import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { EventRegistrationUpdateManyWithoutUsersInput } from "./EventRegistrationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  branch?: BranchWhereUniqueInput | null;
  email?: string;
  eventRegistrations?: EventRegistrationUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  usn?: string;
};
