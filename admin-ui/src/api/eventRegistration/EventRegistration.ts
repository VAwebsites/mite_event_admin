import { Event } from "../event/Event";
import { User } from "../user/User";

export type EventRegistration = {
  createdAt: Date;
  event?: Event;
  id: string;
  updatedAt: Date;
  user?: User;
};
