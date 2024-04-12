import type { NextAuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
  debug: true,
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const res = await fetch('/your/endpoint', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        return req;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login',
  },
  // callbacks: {
  //   async jwt({ token, account, profile }) {
  //     if (account && account.type === 'credentials') {
  //       //(2)
  //       token.userId = account.providerAccountId; // this is Id that coming from authorize() callback
  //     }
  //     return token;
  //   },
  //   async session({ session, token, user }) {
  //     return session;
  //   },
  // },
  secret: process.env.NEXTAUTH_SECRET as string,
} satisfies NextAuthOptions;

export const getServerAuthSession = () => getServerSession(config); //(6)
