import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEvent, FormEventHandler, useRef, useState } from "react";

const SignIn: NextPage = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const onSignInSubmit: FormEventHandler = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setErrorMessage("");
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (res?.status === 200 && res.ok) {
      router.push("/chat");
    } else {
      setErrorMessage("Incorrect email or password");
    }
  };

  return (
    <main>
      <div className="auth-page flex h-screen w-full items-center justify-center">
        <form
          className="z-9999 w-full max-w-sm rounded-lg border bg-white p-10 shadow-lg"
          onSubmit={onSignInSubmit}
        >
          <h1 className="mb-7 text-center text-2xl font-semibold">Sign in</h1>
          {errorMessage && (
            <div
              className="relative mb-5 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
              role="alert"
            >
              <span className="block sm:inline">{errorMessage}</span>
              <span
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
                onClick={() => setErrorMessage("")}
              >
                <svg
                  className="h-6 w-6 fill-current text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            className="mt-2 block w-full rounded border py-2 px-4 outline-none"
            placeholder="type your email..."
          />
          <label htmlFor="password" className="mt-5 block">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            className="mt-2 block w-full rounded border py-2 px-4 outline-none"
            placeholder="******"
          />
          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-simplegram-green py-3 text-center text-simplegram-green-light"
          >
            Sign in
          </button>
          <p className="mt-2 text-center font-light text-gray-600">
            Not a member?{" "}
            <a href="/sign_up" className="font-normal text-simplegram-green">
              Signup now
            </a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
