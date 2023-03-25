import { SharedHead } from "@/components/head";
import { LoginFormData } from "@/components/login";

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Login } from "@/components/login";

export default function LoginPage() {
  const router = useRouter();

  const submitLoginForm = async (data: LoginFormData) => {
    const res = await signIn("signin", {
      redirect: false,
      callbackUrl: process.env.NEXT_PUBLIC_AUTH_URL,
      ...data,
    });

    if (res?.ok) {
      router.push("/");
    }
  };

  return (
    <>
      <SharedHead />
      <main>
        <h1>Sign in</h1>
        <Login submitFormData={submitLoginForm} />
      </main>
    </>
  );
}
