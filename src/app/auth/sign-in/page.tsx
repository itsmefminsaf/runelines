"use client";

import SignIn from "@/lib/actions/signIn";
import { SignInFormType } from "@/types/signIn";
import Link from "next/link";
import React, { useActionState } from "react";

const SignInPage = () => {
  const initialState: SignInFormType = {};
  const [{ email, password, error }, action, isPending] = useActionState(
    SignIn,
    initialState,
  );

  return (
    <form
      action={action}
      className="bg-dark flex w-60 max-w-4/5 flex-col items-center gap-2 py-5 text-white"
    >
      <input
        required
        name="email"
        type="email"
        placeholder="E-mail"
        className="auth-form-input"
        defaultValue={email}
      />
      <input
        required
        name="password"
        type="password"
        placeholder="Password"
        className="auth-form-input"
        defaultValue={password}
      />
      {error && (
        <span className="text-md w-[90%] bg-red-500 p-2 text-center font-extrabold">
          {error}
        </span>
      )}
      <div className="flex w-[90%] gap-0.5">
        <button className="auth-form-button">
          {isPending ? "Please wait" : "SignIn"}
        </button>
        <Link href="/auth/sign-up" className="auth-form-button">
          Sign-up
        </Link>
      </div>
    </form>
  );
};

export default SignInPage;
