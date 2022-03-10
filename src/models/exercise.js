import mongoose from "mongoose"
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
  body_part: {type: String, required: true, trim: true},
  name: {type: String, required: true, trim: true},
  description: {type: String, required: true, trim: true},
  likes: {type: Number, trim: true},
})

export default mongoose.model("Exercise", exerciseSchema)
