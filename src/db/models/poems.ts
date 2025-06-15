import mongoose from "mongoose";

const poemSchema = new mongoose.Schema(
  {
    poem: String,
    user: String,
  },
  { timestamps: true },
);
const Poem = mongoose.models.Poem || mongoose.model("Poem", poemSchema);
export default Poem;
