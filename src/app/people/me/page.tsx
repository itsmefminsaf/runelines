import getUserData from "@/lib/getUserData";
import ProfilePhoto from "@/ui/components/ProfilePhoto";
import userProfile from "@/assets/user.png";
import ChangeProfilePicture from "@/ui/components/ChangeProfilePicture";

const UserPage = async () => {
  const user = await getUserData(["name", "email", "profile"]);
  return (
    <main className="flex flex-col items-center p-3">
      <ChangeProfilePicture>
        <ProfilePhoto
          src={user?.profile || userProfile.src}
          userName={user?.name || ""}
        />
      </ChangeProfilePicture>
      <h1 className="text-3xl font-bold">{user?.name}</h1>
      <h3>{user?.email}</h3>
    </main>
  );
};

export default UserPage;
