import { EventUpdateManyWithoutBranchesInput } from "./EventUpdateManyWithoutBranchesInput";

export type BranchUpdateInput = {
  events?: EventUpdateManyWithoutBranchesInput;
  img?: string;
  name?: string;
};
