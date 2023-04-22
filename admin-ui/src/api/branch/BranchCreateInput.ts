import { EventCreateNestedManyWithoutBranchesInput } from "./EventCreateNestedManyWithoutBranchesInput";
import { UserCreateNestedManyWithoutBranchesInput } from "./UserCreateNestedManyWithoutBranchesInput";

export type BranchCreateInput = {
  events?: EventCreateNestedManyWithoutBranchesInput;
  name: string;
  users?: UserCreateNestedManyWithoutBranchesInput;
};
