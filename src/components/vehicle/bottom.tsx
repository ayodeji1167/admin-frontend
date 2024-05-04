/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Box from '@/components/ui/chakra/Box';
import React, { useEffect, useState } from 'react';
import { columnDef } from './table/column';
import { useGetAllvehicles } from '@/app/api/vehicles/get-vehicles';
import CustomTable from '../table/CustomTable';
import LottieLoader from '../Loader/LottieLoader';
import { getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import Filter from '../table/Filter';

export default function Bottom() {
  const [search, setSearch] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [sorting, setSorting] = React.useState([
    {
      id: 'name',
      desc: true,
    },
  ]);

  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetAllvehicles({
    ...pagination,
    search: searchFilter,
  });

  // console.log('data is', data);

  useEffect(() => {
    if (!search.trim()) {
      return;
    }

    const debounceTimer = setTimeout(() => {
      setSearchFilter(search);
      setPagination({
        ...pagination,
        pageIndex: 0,
      });
    }, 600);
    return () => clearTimeout(debounceTimer);
  }, [search]);

  return (
    <Box bg={'white'} mt={'2rem'} rounded={'1rem'} overflow={'hidden'}>
      <Filter
        name={'Recent Service History'}
        inputProps={{
          placeholder: 'Search by registration number',
          onChange: (e) => {
            setSearch(e.target.value);
          },
          _placeholder: {
            opacity: 0.4,
          },
        }}
      />

      {isLoading ? (
        <LottieLoader />
      ) : (
        <CustomTable
          sorting={sorting}
          pagination={pagination}
          setSorting={setSorting}
          setPagination={setPagination}
          columnDef={columnDef}
          data={data?.data?.vehicles}
          // filter={{
          //   tableName: 'Recent Service History',
          //   inputProps: {
          //     placeholder: 'Search by registration number',
          //     onChange: (e) => {
          //       console.log('value is ', e.target.value);
          //       setSearch(e.target.value);
          //     },
          //     _placeholder: {
          //       opacity: 0.4,
          //     },
          //   },
          // }}
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
      )}
    </Box>
  );
}
