import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    photo: {
      type: String,
      required: true
    },
    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    creaditBalance: {
      type: Number,
      default: 5
    }
  },
  {
    timestamps: true
  }
);


const UserModel = mongoose.model('user',UserSchema);
export default UserModel;