import { Branch } from "../branch/Branch";
import { EventRegistration } from "../eventRegistration/EventRegistration";
import { Feedback } from "../feedback/Feedback";

export type Event = {
  branch?: Branch;
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  eventRegistrations?: Array<EventRegistration>;
  feedbacks?: Array<Feedback>;
  id: string;
  img: string | null;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
  venue: string | null;
};
