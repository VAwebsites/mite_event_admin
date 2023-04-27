import { Event } from "../event/Event";

export type Feedback = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  message: string;
  updatedAt: Date;
};
