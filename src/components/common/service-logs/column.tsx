import { createColumnHelper } from '@tanstack/react-table';
import Box from '@/components/ui/chakra/Box';
import RowActions from './RowActions';
import { Checkbox } from '@chakra-ui/react';
import { IService } from '@/interface/service';
import Status from '@/components/common/Status';
import moment from 'moment';

const columnHelper = createColumnHelper<IService>();

export const columnDef = [
  columnHelper.display({
    id: 'check',
    cell: () => <Checkbox size={{ base: 'sm', md: 'md' }} />,
    header: () => (
      <Checkbox size={{ base: 'sm', md: 'md' }} borderColor={'white'} />
    ),
  }),
  columnHelper.accessor(
    (row) => {
      return moment(row?.timeIn).format('MMMM DD, YYYY, h:mm a');
    },
    {
      cell: (info) => <Box>{info.getValue()}</Box>,
      header: 'Time In',
      id: 'timi-in',
    }
  ),
  columnHelper.accessor(
    (row) => {
      if (row?.timeOut) {
        return moment(row?.timeOut).format('MMMM DD, YYYY, h:mm a');
      } else {
        return 'NULL';
      }
    },
    {
      cell: (info) => <Box>{info.getValue()}</Box>,
      header: 'Time Out',
      id: 'timi-out',
    }
  ),
  // columnHelper.accessor('timeOut', {
  //   cell: (info) => <Box>{info.getValue()?.toISOString()}</Box>,
  //   header: 'Time Out',
  //   id: 'timi-out',
  // }),
  columnHelper.accessor('type', {
    cell: (info) => <Box>{info.getValue()?.toUpperCase()}</Box>,
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
