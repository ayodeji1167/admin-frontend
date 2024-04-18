import { IVehicle } from '@/interface/vehicle';
import { createColumnHelper } from '@tanstack/react-table';
import Box from '@/components/ui/chakra/Box';
import RowActions from './RowActions';
import { Checkbox } from '@chakra-ui/react';

const columnHelper = createColumnHelper<IVehicle>();

export const columnDef = [
  columnHelper.display({
    id: 'check',
    cell: () => <Checkbox />,
    header: () => <Checkbox borderColor={'white'} />,
  }),
  columnHelper.accessor('name', {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: 'Vehicle name',
    id: 'vehicle-name',
  }),
  columnHelper.accessor('make', {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: 'Make',
    id: 'make',
  }),
  columnHelper.accessor('model', {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: 'Model',
    id: 'model',
  }),
  columnHelper.accessor(
    (row) => `${row?.user?.firstName} ${row?.user?.lastName}`,
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
