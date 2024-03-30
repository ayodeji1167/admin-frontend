import { IVehicle } from '@/interface/vehicle';
import { createColumnHelper } from '@tanstack/react-table';
import Box from '@/components/ui/chakra/Box';
import RowActions from './RowActions';

const columnHelper = createColumnHelper<IVehicle>();

export const columnDef = [
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
  columnHelper.accessor('lastServiceDate', {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: 'Last Service Date',
    id: 'last-service-date',
  }),
  columnHelper.accessor('status', {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: 'Status',
    id: 'status',
  }),

  columnHelper.display({
    id: 'actions',
    cell: (props) => <RowActions row={props.row} />,
    header: 'Actions',
  }),
];
