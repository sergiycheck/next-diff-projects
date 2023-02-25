import "./globals.css";

import { Inter } from "@next/font/google";
import Link from "next/link";
import { Text } from "./shared";

import s from "./layout.module.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components 
        returned by the nearest parent
        head.tsx. Find out more 
        at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={inter.className}>
        <main className={s.main}>
          <header className={s.header}>
            <Text>
              <Link href="/">Home</Link>
            </Text>

            <Text>
              <Link href="/page2">Page 2</Link>
            </Text>

            <Text>
              <Link href="/page1">Page 1</Link>
            </Text>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
