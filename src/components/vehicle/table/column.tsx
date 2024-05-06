import { IVehicle } from '@/interface/vehicle';
import { createColumnHelper } from '@tanstack/react-table';
import Box from '@/components/ui/chakra/Box';
import RowActions from './RowActions';
import { Checkbox } from '@chakra-ui/react';

const columnHelper = createColumnHelper<IVehicle>();

export const columnDef = [
  columnHelper.display({
    id: 'check',
    cell: () => <Checkbox size={{ base: 'sm', md: 'md' }} />,
    header: () => (
      <Checkbox size={{ base: 'sm', md: 'md' }} borderColor={'white'} />
    ),
  }),
  columnHelper.accessor('registrationNumber', {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: 'Reg No',
    id: 'registration-number',
  }),
  columnHelper.accessor('make', {
    cell: (info) => <Box>{info.getValue()?.toUpperCase()}</Box>,
    header: 'Make',
    id: 'make',
  }),
  columnHelper.accessor('model', {
    cell: (info) => <Box>{info.getValue()?.toUpperCase()}</Box>,
    header: 'Model',
    id: 'model',
  }),
  columnHelper.accessor(
    (row) => {
      if (row.ownershipType === 'individual') {
        return `${row?.user?.firstName} ${row?.user?.lastName}`;
      } else {
        return `${row?.business?.slug}`;
      }
    },
    {
      cell: (info) => (
        <Box textTransform={'uppercase'} fontWeight={'600'}>
          {info.getValue()}
        </Box>
      ),
      header: 'Owner',
      id: 'owner',
    }
  ),
  // columnHelper.accessor('status', {
  //   cell: (info) => <Box>{info.getValue()}</Box>,
  //   header: 'Status',
  //   id: 'status',
  // }),

  columnHelper.display({
    id: 'actions',
    cell: (props) => <RowActions row={props.row} />,
    header: 'Actions',
  }),
];
