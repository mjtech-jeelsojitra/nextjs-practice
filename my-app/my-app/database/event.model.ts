import mongoose, { Document, Model, Schema } from "mongoose";

export interface IEvent extends Document {
  title: string;
  description?: string;
  location?: string;
  startDate: Date;
  endDate: Date;
  price?: number;
  isFree: boolean;
  imageUrl?: string;
  category?: string;
  organizer?: string;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    price: { type: Number },
    isFree: { type: Boolean, default: false },
    imageUrl: { type: String },
    category: { type: String },
    organizer: { type: String },
  },
  { timestamps: true }
);

const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>("Event", EventSchema);

export default Event;
