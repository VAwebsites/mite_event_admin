import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type BranchWhereInput = {
  events?: EventListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  users?: UserListRelationFilter;
};
