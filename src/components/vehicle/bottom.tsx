'use client';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Box from '@/components/ui/chakra/Box';

import React from 'react';
import { columnDef } from './table/column';
import { vehicle } from '@/data/vehicles';
import { Table, Thead, Tr, Th, chakra, Tbody, Td } from '@chakra-ui/react';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import Filter from './table/filter';
import Pagination from './table/pagination';
export default function Bottom() {
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

  const table = useReactTable({
    columns: columnDef,
    data: vehicle.data,
    getCoreRowModel: getCoreRowModel(),
    // onStateChange: function (updater: Updater<TableState>): void {

    // },
    onSortingChange: setSorting,
    renderFallbackValue: undefined,
    state: { sorting, pagination },
    onPaginationChange: setPagination,
  });
  return (
    <Box bg={'white'} mt={'2rem'} rounded={'1rem'} overflow={'hidden'}>
      <Filter />
      <Table variant="unstyled">
        <Thead>
          {table?.getHeaderGroups().map((headerGroup) => (
            <Tr py={'1rem'} bg={'primary.700'} key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th
                    key={header.id}
                    color={'white'}
                    fontFamily={'body'}
                    fontSize={'1rem'}
                    fontWeight={'700'}
                    textTransform={'capitalize'}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    <chakra.span pl="4">
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === 'desc' ? (
                          <FaSortDown aria-label="sorted descending" />
                        ) : (
                          <FaSortUp aria-label="sorted ascending" />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table?.getRowModel().rows.map((row, index) => (
            <Tr
              key={row.id}
              color={'#56585A'}
              fontWeight={400}
              mb={4}
              bg={index % 2 === 0 ? 'white' : '#3855B30A'}
            >
              {row.getVisibleCells().map((cell: any) => {
                // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                const meta: any = cell.column.columnDef.meta;
                return (
                  <Td key={cell.id} isNumeric={meta?.isNumeric}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Pagination />
    </Box>
  );
}
