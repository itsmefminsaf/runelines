const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="my-10 flex flex-col items-center gap-10">
      <h3 className="px-3 text-center text-xl font-extrabold">
        Share your verses, connect with kindred souls.
      </h3>
      {children}
    </main>
  );
};

export default AuthLayout;
