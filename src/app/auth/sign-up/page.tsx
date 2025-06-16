"use client";

import type { SignUpFormType } from "@/types/signUp";
import SignUp from "@/lib/actions/signUp";
import Link from "next/link";
import { useActionState } from "react";

const SignUpPage = () => {
  const initialState: SignUpFormType = {};
  const [{ name, uname, password, confirmPassword, error }, action, isPending] =
    useActionState(SignUp, initialState);

  return (
    <form
      action={action}
      className="bg-dark dark:bg-light text-light dark:text-dark flex w-60 max-w-4/5 flex-col items-center gap-2 py-5"
    >
      <input
        required
        name="name"
        type="text"
        placeholder="Your Full Name"
        className="auth-form-input"
        defaultValue={name}
      />
      <input
        required
        name="uname"
        type="name"
        placeholder="User name"
        className="auth-form-input"
        defaultValue={uname}
      />
      <input
        required
        name="password"
        type="password"
        placeholder="Password"
        className="auth-form-input"
        defaultValue={password}
      />
      <input
        required
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        className="auth-form-input"
        defaultValue={confirmPassword}
      />
      {error && (
        <span className="text-md w-[90%] bg-red-500 p-2 text-center font-extrabold">
          {error}
        </span>
      )}
      <div className="flex w-[90%] gap-0.5">
        <button className="auth-form-button">
          {isPending ? "Please wait" : "SignUp"}
        </button>
        <Link href="/auth/sign-in" className="auth-form-button">
          Sign-in
        </Link>
      </div>
    </form>
  );
};

export default SignUpPage;
