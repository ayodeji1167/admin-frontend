'use client';
import React from 'react';
import BreadcrumbItem from '@/components/ui/chakra/BreadcrumbItem';
import BreadcrumbLink from '@/components/ui/chakra/BreadcrumbLink';
import Breadcrumb from '@/components/ui/chakra/Breadcrumb';
import { usePathname } from 'next/navigation';

export default function CustomBreadcrumb() {
  const pathname = usePathname();

  const crumbs = pathname.split('/').filter(Boolean); // Remove empty path segments

  return (
    <div>
      <Breadcrumb separator=">">
        {crumbs.map((crumb, index) => {
          const isCurrentPage = index === crumbs.length - 1;
          const href = crumbs.slice(0, index + 1).join('/');

          return (
            <BreadcrumbItem key={crumb} isCurrentPage={isCurrentPage}>
              <BreadcrumbLink
                color={isCurrentPage ? 'primary.500' : '#56585A'}
                href={`/${href}`}
                textTransform={'capitalize'}
                fontSize={'.8rem'}
              >
                {crumb}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </div>
  );
}
