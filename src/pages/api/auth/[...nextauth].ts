import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../server/db";
import bcrypt from "bcrypt"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await prisma.user.findFirst({
          where: {
            email: email,
          }
        })
        if (!user) {
          return null;
        }

        const isMatched = await bcrypt.compare(password, user.password)
        if (!isMatched) {
          return null;
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/sign_in",
  },
  callbacks: {
    async session({ session, user, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);