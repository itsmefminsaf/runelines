"use server";

import dbConnect from "@/db/db";
import User from "@/db/models/users";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.CLOUDINARY_API_KEY,
});

const changeProfilePicture = async (formData: FormData) => {
  const image = formData.get("image") as File;
  const email = formData.get("email");
  if (!image || !email) throw new Error("Required field are not given");

  try {
    const arrayBuffer = await image.arrayBuffer();
    const base64String = Buffer.from(arrayBuffer).toString("base64");
    const dataUri = `data:${image.type};base64,${base64String}`;

    const cloudinaryResponse = await cloudinary.uploader.upload(dataUri, {
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
    });

    await dbConnect();

    await User.findOneAndUpdate(
      { email },
      { profile: cloudinaryResponse.secure_url },
    );
    return true;
  } catch (error) {
    console.log("Error while uploading image to cloudinary: ", error);
    throw new Error("Something went wrong");
  }
};

export default changeProfilePicture;
