"use server";

import dbConnect from "@/db/db";
import User from "@/db/models/users";
import type { SignUpFormType } from "@/types/signUp";
import createSession from "../createSession";
import { redirect } from "next/navigation";
import checkPassword from "../checkPassword";

const SignIn = async (
  prevState: SignUpFormType | undefined,
  formData: FormData,
) => {
  const uname = formData.get("uname") as string;
  const password = formData.get("password") as string;

  try {
    await dbConnect();
    const existingUser = await User.findOne({ uname });

    if (!existingUser) {
      return {
        error: "User not found",
      };
    }

    const correctPassword = await checkPassword(
      password,
      existingUser.password,
    );

    if (!correctPassword) {
      return {
        uname,
        error: "Incorrect password",
      };
    }

    const session = await createSession(uname);

    await User.updateOne(
      { uname },
      { sessions: [...existingUser.sessions, session] },
    );
  } catch (error) {
    console.log("Error in signup action: ", error);

    return {
      uname,
      password,
      error: "something went wrong, please try again later.",
    };
  }

  return redirect("/people/me?welcome=true");
};

export default SignIn;
