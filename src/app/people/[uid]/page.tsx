const PeoplePage = async ({ params }: { params: Promise<{ uid: string }> }) => {
  const { uid } = await params;
  return <h1>{uid}</h1>;
};

export default PeoplePage;
