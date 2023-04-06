import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { EventRegistrationCreateNestedManyWithoutUsersInput } from "./EventRegistrationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  branch?: BranchWhereUniqueInput | null;
  email: string;
  eventRegistrations?: EventRegistrationCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  usn: string;
};
