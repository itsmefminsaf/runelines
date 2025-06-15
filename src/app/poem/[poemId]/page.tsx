import getPoem from "@/lib/getPoem";

const PoemPage = async ({
  params,
}: {
  params: Promise<{ poemId: string }>;
}) => {
  const { poemId } = await params;
  const poem = await getPoem(poemId);
  const date = poem.createdAt.toLocaleDateString();
  const time = poem.createdAt.toLocaleTimeString();
  return (
    <main className="p-5">
      <h2 className="p-2 text-sm font-bold">{poem.user}</h2>
      <p className="bg-dark dark:bg-light text-light dark:text-dark rounded-2xl border-2 p-3">
        {poem.poem}
      </p>
      <div className="flex w-full justify-end gap-3 p-2 text-xs">
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </main>
  );
};

export default PoemPage;
