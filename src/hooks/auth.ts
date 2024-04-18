import { env } from '@/constants/env';
import type { NextAuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const refreshTokenApi = async (refreshToken: string) => {
  // console.log('About to refresh token passed is ', refreshToken, '\n\n');

  const res = await fetch(`${env.apiUrl}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Refresh ${refreshToken}`,
    },
  });
  // console.log('i was just refreshed=========');

  return await res.json();
};
// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
  providers: [
    CredentialsProvider({
      // id: 'Credentials',
      name: 'Credentials',

      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch(`${env.apiUrl}/admin/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });

        const user = await res.json();
        if (res.ok && user) {
          return {
            user: { ...user.data.user },
            backendTokens: {
              jwtExpirationTime: user.data.jwtExpirationTime,
              accessToken: user.data.access_token,
              refreshToken: user.data.refresh_token,
            },
          } as any;
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
      // console.log('token from jwt is ', token);
      // console.log('user from jwt is ', user);

      if (user) {
        // console.log('from jwt token is', token);
        // console.log('from jwt user is', user);
        return { ...token, ...user };
      }
      if (new Date().getTime() < token?.backendTokens?.jwtExpirationTime) {
        return token;
      }
      const refresh = await refreshTokenApi(token.backendTokens.refreshToken);
      // console.log('REFRESH TOKEN DATA is  ==============', refresh, '\n\n\n\n');

      return {
        ...token,
        backendTokens: {
          refreshToken: refresh.data.refresh_token,
          accessToken: refresh.data.access_token,
          ...refresh.data,
        },
      };
    },
    async session({ token, session }) {
      // console.log('session is ', session);
      // console.log('token is ', token);

      session.user = token.user;
      session.backendTokens = token.backendTokens;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
} satisfies NextAuthOptions;

export const getServerAuthSession = () => getServerSession(config);
