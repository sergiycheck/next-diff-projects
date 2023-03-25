import Head from "next/head";
import { Inter } from "next/font/google";
import LoginButton from "@/components/login-btn";
import { SharedHead } from "@/components/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SharedHead />
      <main className={inter.className}>
        <h1>starter page</h1>
        <LoginButton />
      </main>
    </>
  );
}
