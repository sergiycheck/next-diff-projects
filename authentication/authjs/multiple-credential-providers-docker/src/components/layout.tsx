import { signOut, useSession } from "next-auth/react";
import NextLink from "next/link";

function Navbar() {
  const { data: session, status } = useSession();

  let renderedSignInPart: JSX.Element;
  if (status === "authenticated") {
    renderedSignInPart = (
      <>
        <li>
          <p>{session.user?.email}</p>
        </li>
        <button onClick={() => signOut()}>sign out</button>
      </>
    );
  } else {
    renderedSignInPart = (
      <>
        <li>
          <NextLink href="/auth/signin">sign-in</NextLink>
        </li>
        <li>
          <NextLink href="/auth/register">register</NextLink>
        </li>
      </>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <NextLink href="/">home</NextLink>
        </li>
        {renderedSignInPart}
      </ul>
    </nav>
  );
}

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
