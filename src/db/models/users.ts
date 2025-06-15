import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  profile: String,
  password: { hash: String, salt: String },
  sessions: [{ session: String, device: String }],
});
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
