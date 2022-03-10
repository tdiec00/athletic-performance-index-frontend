import mongoose from "mongoose"
const Schema = mongoose.Schema
import exerciseSchema from "./exercise"

const trackerSchema = new Schema(
  {
    username: {type: String, required: true, trim: true},
    exercises: [exerciseSchema],
  },
  {timestamps: true}
)

export default mongoose.model("Tracker", trackerSchema)
