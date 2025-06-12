import redis from "@/db/redis";
import { cookies } from "next/headers";

const getSession = async () => {
  const session = (await cookies()).get("session")?.value;

  if (!session) {
    return null;
  }

  const email = redis.get(session);

  return email;
};

export default getSession;
