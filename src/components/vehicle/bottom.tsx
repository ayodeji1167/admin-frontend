'use client';

import Box from '@/components/ui/chakra/Box';
import React from 'react';
import { columnDef } from './table/column';
import { useGetAllvehicles } from '@/app/api/vehicles/get-vehicles';
import CustomTable from '../table/CustomTable';
import LottieLoader from '../Loader/LottieLoader';
import { getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';

export default function Bottom() {
  const { data, isLoading } = useGetAllvehicles();
  const [sorting, setSorting] = React.useState([
    {
      id: 'name',
      desc: true,
    },
  ]);

  const [pagination, setPagination] = React.useState({
    pageIndex: data?.data.pageNo || 0,
    pageSize: data?.data.pageSize || 10,
  });

  // console.log('data is', data);

  if (isLoading) {
    return <LottieLoader />;
  } else {
    return (
      <Box bg={'white'} mt={'2rem'} rounded={'1rem'} overflow={'hidden'}>
        <CustomTable
          sorting={sorting}
          pagination={pagination}
          setSorting={setSorting}
          setPagination={setPagination}
          columnDef={columnDef}
          data={data?.data?.vehicles}
          filter={{
            tableName: 'Recent Service History',
          }}
          total={data?.data.total || 0}
          tableOptions={{
            pageCount: Math.ceil(
              Number(data?.data?.total) / Number(pagination.pageSize)
            ),
            manualPagination: true,
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel(),
            // getPaginationRowModel: getPaginationRowModel(),
            onPaginationChange: setPagination,
            state: {
              //...
              pagination,
            },
          }}
        />
      </Box>
    );
  }
}
