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
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await dbConnect();
    const existingUser = await User.findOne({ email });

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
        email,
        error: "Incorrect password",
      };
    }

    const session = await createSession(email);

    await User.updateOne(
      { email },
      { sessions: [...existingUser.sessions, session] },
    );
  } catch (error) {
    console.log("Error in signup action: ", error);

    return {
      email,
      password,
      error: "something went wrong, please try again later.",
    };
  }

  return redirect("/");
};

export default SignIn;
