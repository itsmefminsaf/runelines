"use client";

import changeProfilePicture from "@/lib/actions/changeProfilePicture";
import getUserData from "@/lib/actions/getUserData";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

const ChangeProfilePicture = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return null;
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const user = await getUserData(["uname"]);

    if (user?.uname) {
      formData.append("uname", user.uname);
    }

    const success = await changeProfilePicture(formData);
    if (success) router.refresh();
  };

  return (
    <label htmlFor="profile">
      {children}
      <input
        type="file"
        id="profile"
        className="hidden"
        accept="image/*"
        onChange={handleChange}
      />
    </label>
  );
};

export default ChangeProfilePicture;
