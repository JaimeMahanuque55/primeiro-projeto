////////////// Login: Resolvendo problema dos dados 1 //////////


import NextAuth from "next-auth/next";
import { AuthUser } from "./AuthUser";

declare module "next-auth" {
  interface Session {
    user: AuthUser
  }
}