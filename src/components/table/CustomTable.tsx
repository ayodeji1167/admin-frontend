'use client';
import {
  Box,
  Center,
  CenterProps,
  Flex,
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
  TableOptions,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';
// import Filter from './Filter';
import Pagination from './Pagination';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';

interface PaginationBoxProps extends CenterProps {
  direction: 'prevoius' | 'next';
  disabled: boolean;
  onClick: any;
}
function PaginationBox(props: PaginationBoxProps) {
  return (
    <Center
      shadow={'md'}
      w={'3.6rem'}
      h={'2.5rem'}
      cursor={props.disabled ? 'not-allowed' : 'pointer'}
      fontSize={!props.disabled ? '1.4rem' : '1rem'}
      onClick={!props.disabled ? props.onClick : () => {}}
      rounded={'md'}
      color={!props.disabled ? 'black' : 'gray.100'}
      // {...props}
    >
      {props.direction === 'prevoius' ? (
        <MdOutlineNavigateBefore />
      ) : (
        <MdOutlineNavigateNext />
      )}
    </Center>
  );
}
interface CustomTableProps {
  sorting: any;
  pagination: any;
  setSorting: any;
  setPagination: any;
  columnDef: any;
  data: Array<any> | undefined;
  filter?: {
    tableName: string;
    inputProps?: InputProps;
  };
  total?: number;
  tableOptions?: Partial<TableOptions<any>>;
}
export default function CustomTable({
  sorting,
  pagination,
  setSorting,
  setPagination,
  columnDef,
  data = [],
  // filter,
  total = 0,
  tableOptions,
}: CustomTableProps) {
  const table = useReactTable({
    columns: columnDef,
    data,
    getCoreRowModel: getCoreRowModel(),

    onSortingChange: setSorting,
    renderFallbackValue: undefined,
    state: { sorting, pagination },
    onPaginationChange: setPagination,
    ...tableOptions,
  });

  return (
    <Box>
      {/* <Filter name={filter.tableName} inputProps={filter.inputProps} /> */}

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

      <Flex px={'2rem'} justifyContent={'space-between'} alignItems={'center'}>
        <Pagination pagination={pagination} total={total} />
        <Flex alignItems={'center'} gap={'1rem'}>
          {/* <Button
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </Button> */}
          <PaginationBox
            direction="prevoius"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
          <PaginationBox
            direction="next"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
          {/* <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </Button> */}
          {/* <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </Button> */}
          {/* <Button
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </Button> */}
          {/* <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select> */}
        </Flex>
      </Flex>
    </Box>
  );
}
