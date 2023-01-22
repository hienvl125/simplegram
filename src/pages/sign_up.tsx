import { NextPage } from "next";
import { FormEvent, FormEventHandler, useRef, useState } from "react";
import { api } from "../utils/api";

type AlertMessage = {
  type: "success" | "error";
  content: string;
} | null;

const SignUp: NextPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [alertMessage, setAlertMessage] = useState<AlertMessage>(null);

  const { mutate: signUp } = api.auth.signUp.useMutation({
    onSuccess: () => {
      setAlertMessage({
        type: "success",
        content: "Signed up successfully. Sign in now",
      });
    },
    onError: (err) => {
      setAlertMessage({
        type: "error",
        content: err.message,
      });
    },
  });

  const onSignUpSubmit: FormEventHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const confirmPassword = confirmPasswordRef.current?.value || "";

    if (!password || !confirmPassword) {
      setAlertMessage({
        type: "error",
        content: "All fields can't be blank",
      });
      return;
    }

    if (password && confirmPassword && password != confirmPassword) {
      setAlertMessage({
        type: "error",
        content: "Password confirmation doesn't match",
      });
      return;
    }

    signUp({
      email,
      password,
    });
  };

  const renderAlertMessage = () => {
    const alertMessageColor =
      alertMessage?.type === "success" ? "green" : "red";
    return (
      <div
        className={`relative mb-5 w-full rounded border border-${alertMessageColor}-400 bg-${alertMessageColor}-100 px-4 py-3 text-${alertMessageColor}-700`}
        role="alert"
      >
        <span className="block sm:inline">{alertMessage?.content}</span>
        <span
          className="absolute top-0 bottom-0 right-0 p-1"
          onClick={() => setAlertMessage(null)}
        >
          <svg
            className={`h-5 w-5 fill-current text-${alertMessageColor}-500`}
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    );
  };

  return (
    <main>
      <div className="auth-page flex h-screen w-full items-center justify-center">
        <form
          className="z-9999 w-full max-w-sm rounded-lg border bg-white p-10 shadow-lg"
          onSubmit={onSignUpSubmit}
        >
          <h1 className="mb-7 text-center text-2xl font-semibold">Sign up</h1>
          {alertMessage && renderAlertMessage()}
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
            placeholder="*******"
          />
          <label htmlFor="confirmPassword" className="mt-5 block">
            Confirm password
          </label>
          <input
            ref={confirmPasswordRef}
            type="password"
            name="confirmPassword"
            className="mt-2 block w-full rounded border py-2 px-4 outline-none"
            placeholder="*******"
          />
          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-simplegram-green py-3 text-center text-simplegram-green-light"
          >
            Sign up
          </button>
          <p className="mt-2 text-center font-light text-gray-600">
            Already a member?{" "}
            <a href="/sign_in" className="font-normal text-simplegram-green">
              Signin now
            </a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
