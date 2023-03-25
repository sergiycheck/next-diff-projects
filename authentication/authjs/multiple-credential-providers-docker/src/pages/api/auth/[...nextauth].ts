import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    CredentialsProvider({
      id: "signin",
      name: "Sign in by account",
      type: "credentials",
      async authorize(credentials, req) {
        console.log("signin credentials", credentials);
        const user = {
          id: "user1_id",
          email: "user1Email",
          password: "user1_pass",
        };
        return user;
      },
      credentials: {
        email: { type: "text" },
        password: { type: "text" },
      },
    }),
    CredentialsProvider({
      id: "register",
      name: "Register new account",
      type: "credentials",
      async authorize(credentials, req) {
        console.log("register credentials", credentials);
        const user = {
          id: "user1_id",
          email: "user1Email",
          password: "user1_pass",
        };

        return user;
      },
      credentials: {
        email: { type: "text" },
        password: { type: "text" },
      },
    }),
  ],
};
export default NextAuth(authOptions);
