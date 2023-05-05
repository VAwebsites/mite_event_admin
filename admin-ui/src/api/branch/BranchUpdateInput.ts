import { EventUpdateManyWithoutBranchesInput } from "./EventUpdateManyWithoutBranchesInput";
import { UserUpdateManyWithoutBranchesInput } from "./UserUpdateManyWithoutBranchesInput";

export type BranchUpdateInput = {
  events?: EventUpdateManyWithoutBranchesInput;
  img?: string | null;
  name?: string;
  users?: UserUpdateManyWithoutBranchesInput;
};
