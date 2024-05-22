import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import { AppProvider } from '@/providers/AppProvider';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Gan and Garage Admin',
  description: 'Admin dashboard for gan and garage',
};
const sfPro = localFont({
  src: [
    {
      path: '../assets/fonts/sfpro/sf-pro-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/sfpro/sf-regular.otf',
      weight: '400',
      style: 'medium',
    },
    {
      path: '../assets/fonts/sfpro/sf-pro-medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/sfpro/sf-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${manrope.variable} ${sfPro.variable}`} lang="en">
      <body style={{ background: '#ECF3F9' }}>
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
