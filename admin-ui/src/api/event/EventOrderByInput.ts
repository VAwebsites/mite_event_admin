import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  branchId?: SortOrder;
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  img?: SortOrder;
  startDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  venue?: SortOrder;
};
