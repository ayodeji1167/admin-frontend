/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useAuth } from '@/hooks/useAuth';
import { useRouter, usePathname } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const { accessToken } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!accessToken && !pathname?.startsWith('/auth')) {
      router.push('/auth/login');
    }
  }, [accessToken, pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <div>{mounted && children}</div>;
}
