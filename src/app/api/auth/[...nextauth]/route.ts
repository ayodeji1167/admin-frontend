import NextAuth from 'next-auth';
// import type { NextAuthOptions } from 'next-auth';
import { config } from '@/hooks/auth';

// export const authOptions = config as any;

const handler = NextAuth(config) as any;

// export { handler as GET, handler as POST };
export const GET = handler;
export const POST = handler;
