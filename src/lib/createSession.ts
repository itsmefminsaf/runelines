import redis from "@/db/redis";
import crypto from "crypto";
import { cookies, headers } from "next/headers";

const createSession = async (uname: string) => {
  try {
    const session = crypto.randomBytes(64).toString("hex").normalize();

    const device = (await headers()).get("user-agent") || "unknown";

    (await cookies()).set("session", session);

    redis.set(session, uname, { ex: 60 * 60 * 24 * 15 });

    return { session, device };
  } catch (err) {
    console.log("Err creating session: ", err);
    throw new Error("Failed to create session");
  }
};

export default createSession;
