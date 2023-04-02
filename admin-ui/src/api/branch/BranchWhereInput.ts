import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BranchWhereInput = {
  events?: EventListRelationFilter;
  id?: StringFilter;
  img?: StringFilter;
  name?: StringFilter;
};
