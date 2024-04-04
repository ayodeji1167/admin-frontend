'use client';
import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import CustomTable from '../table/CustomTable';
import { columnDef } from './column';
import { users } from '@/data/users';

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
        data={users.data}
        filter={{
          tableName: 'Recent Service History',
        }}
      />
    </Box>
  );
}
