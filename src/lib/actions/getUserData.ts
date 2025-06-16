"use server";

import dbConnect from "@/db/db";
import User from "@/db/models/users";
import redis from "@/db/redis";
import { UserType } from "@/types/user";
import { cookies } from "next/headers";

const getUserData = async <K extends keyof UserType>(
  requestedFields: K[],
  uname: string = "",
): Promise<Pick<UserType, K> | null> => {
  let _id;
  if (uname) {
    _id = uname;
  } else {
    const session = (await cookies()).get("session")?.value;
    if (!session) return null;

    const uname = await redis.get(session);
    if (!uname) return null;
    _id = uname;
  }

  await dbConnect();
  console.log(_id);

  const user = await User.findOne({ uname: _id });

  if (!user) return null;

  const result = {} as Pick<UserType, K>;
  for (const field of requestedFields) {
    result[field] = (user as unknown as UserType)[field];
  }

  return result;
};

export default getUserData;
