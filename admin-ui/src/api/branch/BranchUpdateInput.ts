import { EventUpdateManyWithoutBranchesInput } from "./EventUpdateManyWithoutBranchesInput";
import { UserUpdateManyWithoutBranchesInput } from "./UserUpdateManyWithoutBranchesInput";

export type BranchUpdateInput = {
  events?: EventUpdateManyWithoutBranchesInput;
  name?: string;
  users?: UserUpdateManyWithoutBranchesInput;
};
