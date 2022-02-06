import mongoose, {Schema} from "mongoose";

const Tricep = new Schema(
  {
    firstname: {type: String, required: true, trim: true},
    lastname: {type: String, required: true, trim: true},
    username: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    password_digest: {type: String, required: true, trim: true},
  },
  {timestamps: true}
);

export default mongoose.model("tricep", Tricep);
