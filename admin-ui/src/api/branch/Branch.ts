import { Event } from "../event/Event";

export type Branch = {
  createdAt: Date;
  events?: Array<Event>;
  id: string;
  img: string;
  name: string;
  updatedAt: Date;
};
