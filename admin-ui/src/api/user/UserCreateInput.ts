import { EventRegistrationCreateNestedManyWithoutUsersInput } from "./EventRegistrationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email: string;
  eventRegistrations?: EventRegistrationCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  usn: string;
};
