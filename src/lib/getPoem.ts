"use server";

import dbConnect from "@/db/db";
import Poem from "@/db/models/poems";

const getPoem = async (poemId: string) => {
  if (!poemId) return null;
  try {
    await dbConnect();
    const poem = await Poem.findById(poemId);
    return poem;
  } catch (error) {
    console.log("Error getting poem: ", error);
  }
};

export default getPoem;
