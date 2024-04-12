import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import { config } from '@/hooks/auth';

export const authOptions: NextAuthOptions = config;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
