import { env } from '@/constants/env';
import type { NextAuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch(`${env.apiUrl}/api/v1/admin/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await res.json();
        if (res.ok && user) {
          return {
            id: user.data.user._id,
            ...user.data.user,
            access_token: user.data.access_token,
          };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as any;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
} satisfies NextAuthOptions;

export const getServerAuthSession = () => getServerSession(config); //(6)
