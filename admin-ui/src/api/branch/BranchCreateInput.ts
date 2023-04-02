import { EventCreateNestedManyWithoutBranchesInput } from "./EventCreateNestedManyWithoutBranchesInput";

export type BranchCreateInput = {
  events?: EventCreateNestedManyWithoutBranchesInput;
  img: string;
  name: string;
};
