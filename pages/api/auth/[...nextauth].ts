import NextAuth, { NextAuthOptions } from 'next-auth';


export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: []
}

export default NextAuth(authOptions);