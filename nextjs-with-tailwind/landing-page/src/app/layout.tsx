import './globals.css';
import RootHeader from './components/common/header/header';

import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`${inter.variable} font-sans max-[770px]:text-xs relative`}
      >
        <RootHeader />
        {children}
      </body>
    </html>
  );
}
