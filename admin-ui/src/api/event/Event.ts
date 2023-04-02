import { Branch } from "../branch/Branch";
import { EventRegistration } from "../eventRegistration/EventRegistration";

export type Event = {
  branch?: Branch;
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  eventRegistrations?: Array<EventRegistration>;
  id: string;
  img: string | null;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
  venue: string | null;
};
