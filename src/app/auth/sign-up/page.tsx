import Link from "next/link";

const SignUpPage = () => {
  return (
    <form className="bg-dark flex w-60 max-w-4/5 flex-col items-center gap-2 py-5 text-white">
      <input
        type="text"
        placeholder="Your Full Name"
        className="auth-form-input"
      />
      <input type="email" placeholder="E-mail" className="auth-form-input" />
      <input
        type="password"
        placeholder="Password"
        className="auth-form-input"
      />
      <input
        type="password"
        placeholder="Confirm password"
        className="auth-form-input"
      />
      <div className="flex w-[90%] gap-0.5">
        <button className="auth-form-button">Sign-up</button>
        <Link href="/auth/sign-in" className="auth-form-button">
          Sign-in
        </Link>
      </div>
    </form>
  );
};

export default SignUpPage;
