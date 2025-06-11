import { error } from "console";
import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

if (!DB_URI) {
  throw new Error(
    "Please define the DB_URI environment variable inside .env.local",
  );
}

async function dbConnect() {
  try {
    mongoose.connection.on("connected", () => {
      return mongoose.connection.readyState === 1;
    });
    await mongoose.connect(DB_URI as string);
  } catch (err) {
    error("Failed to connect to MongoDB", err);
  }
}

export default dbConnect;
