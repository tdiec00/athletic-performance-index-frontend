import mongoose from "mongoose"
const Schema = mongoose.Schema
import exerciseSchema from "./exercise"

const trackerSchema = new Schema(
  {
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", trim: true},
    exercises: [exerciseSchema],
  },
  {timestamps: true}
)

export default mongoose.model("Tracker", trackerSchema)
