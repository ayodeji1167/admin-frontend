'use client';

import Box from '@/components/ui/chakra/Box';
import React, { useState } from 'react';
import CustomTable from '@/components/table/CustomTable';
import { columnDef } from './column';
import { invoices } from '@/data/invoices';

export default function Bottom() {
  const [sorting, setSorting] = useState([
    {
      id: 'onamwee',
      desc: true,
    },
  ]);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 15,
  });

  return (
    <Box bg={'white'} mt={'2rem'} rounded={'1rem'} overflow={'hidden'}>
      <CustomTable
        sorting={sorting}
        pagination={pagination}
        setSorting={setSorting}
        setPagination={setPagination}
        columnDef={columnDef}
        data={invoices.data}
        filter={{
          tableName: 'Recent Service History',
        }}
      />{' '}
    </Box>
  );
}
