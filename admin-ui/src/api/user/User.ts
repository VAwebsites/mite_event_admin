import { EventRegistration } from "../eventRegistration/EventRegistration";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string;
  eventRegistrations?: Array<EventRegistration>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  usn: string;
};
