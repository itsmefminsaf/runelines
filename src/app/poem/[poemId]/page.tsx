import Poem from "@/ui/components/Poem";

const PoemPage = async ({
  params,
}: {
  params: Promise<{ poemId: string }>;
}) => {
  const { poemId } = await params;

  return <Poem poemId={poemId} />;
};

export default PoemPage;
