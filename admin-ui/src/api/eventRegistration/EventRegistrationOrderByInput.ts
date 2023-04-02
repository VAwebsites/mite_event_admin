import { SortOrder } from "../../util/SortOrder";

export type EventRegistrationOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
