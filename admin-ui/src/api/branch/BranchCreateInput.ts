import { EventCreateNestedManyWithoutBranchesInput } from "./EventCreateNestedManyWithoutBranchesInput";
import { UserCreateNestedManyWithoutBranchesInput } from "./UserCreateNestedManyWithoutBranchesInput";

export type BranchCreateInput = {
  events?: EventCreateNestedManyWithoutBranchesInput;
  img?: string | null;
  name: string;
  users?: UserCreateNestedManyWithoutBranchesInput;
};
