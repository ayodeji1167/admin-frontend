'use client';
import {
  Box,
  InputProps,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  chakra,
} from '@chakra-ui/react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';
import Filter from './Filter';
import Pagination from './Pagination';
import { FaSortDown, FaSortUp } from 'react-icons/fa';

interface CustomTableProps {
  sorting: any;
  pagination: any;
  setSorting: any;
  setPagination: any;
  columnDef: any;
  data: Array<any>;
  filter: {
    tableName: string;
    inputProps: InputProps;
  };
}
export default function CustomTable({
  sorting,
  pagination,
  setSorting,
  setPagination,
  columnDef,
  data,
  filter,
}: CustomTableProps) {
  const table = useReactTable({
    columns: columnDef,
    data,
    getCoreRowModel: getCoreRowModel(),

    onSortingChange: setSorting,
    renderFallbackValue: undefined,
    state: { sorting, pagination },
    onPaginationChange: setPagination,
  });
  return (
    <Box>
      <Filter name={filter.tableName} inputProps={filter.inputProps} />

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
