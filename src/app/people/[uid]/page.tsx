import getUserData from "@/lib/getUserData";

const UserPage = async ({ params }: { params: Promise<{ uid: string }> }) => {
  const { uid } = await params;

  if (uid === "me") {
    const user = await getUserData(["name", "email"]);
    return (
      <main className="p-3">
        <h1 className="text-3xl font-bold">{user?.name}</h1>
        <h3>{user?.email}</h3>
      </main>
    );
  }
  return <h1>{uid}</h1>;
};

export default UserPage;
