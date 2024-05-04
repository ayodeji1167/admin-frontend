'use client';

import React from 'react';
import CustomTable from '@/components/table/CustomTable';
import { Box } from '@chakra-ui/react';
import { columnDef } from './column';
import { useGetAllServices } from '@/app/api/service/get-all-services';
import { getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import LottieLoader from '@/components/Loader/LottieLoader';

export default function ServiceLogs({ vehicleId }: { vehicleId?: string }) {
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
  const filterData: any = pagination;
  if (vehicleId) {
    filterData.vehicleId = vehicleId;
  }
  const { data, isLoading } = useGetAllServices(filterData);

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
          data={data?.data?.services}
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
