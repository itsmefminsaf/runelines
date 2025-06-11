import redis from "@/db/redis";
import crypto from "crypto";
import { cookies } from "next/headers";

const createSession = async (email: string) => {
  try {
    const sessionId = crypto.randomBytes(64).toString("hex").normalize();
    (await cookies()).set("session", sessionId);
    redis.set(sessionId, email, { ex: 60 * 60 * 24 * 15 });
    return sessionId;
  } catch (err) {
    console.log("Err creating session: ", err);
    throw new Error("Failed to create session");
  }
};

export default createSession;
