import { EventUpdateManyWithoutBranchesInput } from "./EventUpdateManyWithoutBranchesInput";
import { UserUpdateManyWithoutBranchesInput } from "./UserUpdateManyWithoutBranchesInput";

export type BranchUpdateInput = {
  events?: EventUpdateManyWithoutBranchesInput;
  img?: string;
  name?: string;
  users?: UserUpdateManyWithoutBranchesInput;
};
