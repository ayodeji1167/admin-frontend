import Link from 'next/link';
import { ReactNode } from 'react';

import logo from '@/assets/logo.png';
import Image from 'next/image';
// import logo from "@/assets/logo.png";

type LogoProps = {
  to?: string;
  text?: ReactNode;
  color?: 'white';
};

export const Logo = (props: LogoProps) => {
  const { to } = props;

  function PlainLogo() {
    return (
      <Image
        src={logo}
        alt="logo"
        style={{ width: '100%', height: '100%' }}
        {...props}
      />
    );
  }

  function LinkLogo() {
    return (
      <Link href={to || '/'}>
        <PlainLogo />
      </Link>
    );
  }

  if (to) {
    return <LinkLogo />;
  }

  return <PlainLogo />;
};
