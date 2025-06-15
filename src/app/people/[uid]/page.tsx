import getUserData from "@/lib/getUserData";
import ProfilePhoto from "@/ui/components/ProfilePhoto";
import userProfile from "@/assets/user.png";
import ChangeProfilePicture from "@/ui/components/ChangeProfilePicture";

const UserPage = async ({ params }: { params: Promise<{ uid: string }> }) => {
  const { uid } = await params;

  if (uid === "me") {
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
  }
  return <h1>{uid}</h1>;
};

export default UserPage;
