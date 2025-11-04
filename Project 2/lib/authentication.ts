import { NextAuthOptions } from "next-auth";
// authOptions ek global configuration object hai jise NextAuth() function use karta hai authentication manage karne ke liye 🔐
import CredentialsProvider from "next-auth/providers/credentials";
// CredentialsProvider use kar raha hai, iska matlab — email aur password se login karna (Google ya GitHub se nahi).

import connectDb from "./database";
import User from "@/model/user.model";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";
const authOptions: NextAuthOptions = {
  providers: [
    //login kaise karoge
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;
        if (!email || !password) {
          throw new Error("email or password is not found");
        }
        await connectDb();
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("user not found");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new Error("incorrect Password");
        }

        return {
          id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // token ke ander user details daali
    async signIn({ account, user }) {
      if (account?.provider == "google") {
        await connectDb();
        let existUser = await User.findOne({ email: user?.email });
        if (!existUser) {
          existUser = await User.create({
            name: user.name,
            email: user?.email,
          });
        }
        user.id = existUser._id as string;
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },
    // session ke ander user details daalega

    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXT_AUTH_SECRET,
};
export default authOptions;

// sign in

// token generate

// token ke ander user details daal di

// session ke ander user ki details daalni hai token se
