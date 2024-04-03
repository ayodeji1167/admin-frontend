'use client';

import React from 'react';

import { columnDef } from './column';
import { serviceLogs } from '@/data/service-logs';
import CustomTable from '@/components/table/CustomTable';
import { Box } from '@chakra-ui/react';

export default function ServiceLogs() {
  const [sorting, setSorting] = React.useState([
    {
      id: 'name',
      desc: true,
    },
  ]);

  const [pagination, setPagination] = React.useState({
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
        data={serviceLogs.data}
        filter={{
          tableName: 'Recent Service History',
        }}
      />
    </Box>
  );
}
