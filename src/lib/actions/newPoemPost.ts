"use server";

import dbConnect from "@/db/db";
import Poem from "@/db/models/poems";
import { PoemFormStateType } from "@/types/poem";
import { redirect } from "next/navigation";

const newPoemPost = async (
  prevState: PoemFormStateType,
  formData: FormData,
): Promise<PoemFormStateType> => {
  const poem = formData.get("poem")?.toString();
  const user = formData.get("user")?.toString();
  let poemId: string;
  if (!user)
    return { error: "You tried to do some hack. But, doesn't work here." };
  if (!poem) return { error: "Please write your thoughts" };

  try {
    await dbConnect();
    const newPoem = new Poem({ poem, user });
    await newPoem.save();
    poemId = newPoem._id.toString();
  } catch (error) {
    console.log("Error submitting poem: ", error);
    return { error: "Something went wrong. Please try again" };
  }

  redirect(`/poem/${poemId}`);
};

export default newPoemPost;
