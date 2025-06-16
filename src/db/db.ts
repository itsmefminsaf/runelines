import mongoose, { Mongoose } from "mongoose";

const DB_URI = process.env.DB_URI;

if (!DB_URI) throw new Error("Please add the DB_URI environmental variable");

let cached: { conn: null | Mongoose; promise: null | Promise<Mongoose> } = (
  global as unknown as { mongoose: { conn: null; promise: null } }
).mongoose;

if (!cached) {
  cached = (
    global as unknown as {
      mongoose: { conn: null; promise: null };
    }
  ).mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(DB_URI, {
        bufferCommands: false,
      })
      .then((_mongoose) => {
        cached.conn = _mongoose;
        console.log("MongoDB connected");
        return _mongoose;
      })
      .catch((err) => {
        console.log("Error connecting to mongoDB: ", err);
        throw err;
      });
  }
  return cached.promise;
};

export default dbConnect;
