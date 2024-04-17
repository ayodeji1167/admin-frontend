import NextAuth from 'next-auth';
import { config } from '@/hooks/auth';

// export const authOptions = config as any;

const handler = NextAuth(config);

export { handler as GET, handler as POST };
// export const GET = handler;
// export const POST = handler;
// export const update = handler.update;
