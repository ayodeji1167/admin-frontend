import { createColumnHelper } from '@tanstack/react-table';
import Box from '@/components/ui/chakra/Box';
import RowActions from './RowActions';
import { Checkbox } from '@chakra-ui/react';
import { IService } from '@/interface/service';
import Status from '@/components/common/Status';

const columnHelper = createColumnHelper<IService>();

export const columnDef = [
  columnHelper.display({
    id: 'check',
    cell: () => <Checkbox />,
    header: () => <Checkbox borderColor={'white'} />,
  }),
  columnHelper.accessor('timeIn', {
    cell: (info) => <Box>{info.getValue().toISOString()}</Box>,
    header: 'Time In',
    id: 'timi-in',
  }),
  columnHelper.accessor('timeOut', {
    cell: (info) => <Box>{info.getValue().toISOString()}</Box>,
    header: 'Time Out',
    id: 'timi-out',
  }),
  columnHelper.accessor('type', {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: 'Service Type',
    id: 'service-type',
  }),
  columnHelper.accessor('status', {
    cell: (info) => (
      <Box>
        <Status status={info.getValue()} />
      </Box>
    ),
    header: 'Status',
    id: 'status',
  }),

  columnHelper.display({
    id: 'actions',
    cell: (props) => <RowActions row={props.row} />,
    header: 'Actions',
  }),
];
