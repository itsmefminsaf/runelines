"use server";

import dbConnect from "@/db/db";
import User from "@/db/models/users";
import type { SignUpFormType } from "@/types/signUp";
import hashPassword from "../hashPassword";
import createSession from "../createSession";
import { redirect } from "next/navigation";

const SignUp = async (
  prevState: SignUpFormType | undefined,
  formData: FormData,
) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (password !== confirmPassword) {
    return {
      name,
      email,
      error: "Passwords do not match.",
    };
  }

  try {
    await dbConnect();
    const existingUser = await User.find({ email });

    if (existingUser.length !== 0) {
      return {
        name,
        error: "Email is already used",
      };
    }

    const hashedPassword = await hashPassword(password);

    const session = await createSession(email);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      sessions: [session],
    });

    await newUser.save();
  } catch (error) {
    console.log("Error in signup action: ", error);

    return {
      name,
      email,
      password,
      confirmPassword,
      error: "something went wrong, please try again later.",
    };
  }

  return redirect("/people/me?welcome=true");
};

export default SignUp;
