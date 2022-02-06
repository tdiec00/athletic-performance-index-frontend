import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Tracker = new Schema(
  {
    username: {type: String, required: true, trim: true},
  },
  {timestamps: true}
);

export default mongoose.model("tracker", Tracker);
