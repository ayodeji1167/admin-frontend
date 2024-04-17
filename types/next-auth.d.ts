/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DefaultSession } from 'next-auth';
import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      role: string;
    } & DefaultSession['user'];
    backendTokens: {
      jwtExpirationTime: any;
      accessToken: string;
      refreshToken: string;
    };
  }
}

import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      role: string;
    };
    backendTokens: {
      jwtExpirationTime: any;

      accessToken: string;
      refreshToken: string;
    };
  }
}
