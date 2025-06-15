"use server";

import dbConnect from "@/db/db";
import User from "@/db/models/users";
import redis from "@/db/redis";
import { UserType } from "@/types/user";
import { cookies } from "next/headers";

const getUserData = async <K extends keyof UserType>(
  requestedFields: K[],
): Promise<Pick<UserType, K> | null> => {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;

  const email = await redis.get(session);
  if (!email) return null;

  await dbConnect();
  const user = await User.findOne({ email }).lean();

  if (!user) return null;

  const result = {} as Pick<UserType, K>;
  for (const field of requestedFields) {
    result[field] = (user as unknown as UserType)[field];
  }

  return result;
};

export default getUserData;
