import { InferSchemaType, model, Schema } from "mongoose";

// create mongoDB schema
const noteSchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String },
  },
  { timestamps: true }
);

// this is type for TypeScript
type Note = InferSchemaType<typeof noteSchema>;

export default model<Note>("Note", noteSchema);
