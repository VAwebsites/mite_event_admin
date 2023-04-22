import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type BranchWhereInput = {
  events?: EventListRelationFilter;
  id?: StringFilter;
  img?: StringNullableFilter;
  name?: StringFilter;
  users?: UserListRelationFilter;
};
