import { Event } from "../event/Event";
import { User } from "../user/User";

export type Branch = {
  createdAt: Date;
  events?: Array<Event>;
  id: string;
  name: string;
  updatedAt: Date;
  users?: Array<User>;
};
