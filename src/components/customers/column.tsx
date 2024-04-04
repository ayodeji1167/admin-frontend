import { createColumnHelper } from '@tanstack/react-table';
import Box from '@/components/ui/chakra/Box';
// import RowActions from './RowActions';
import { Checkbox } from '@chakra-ui/react';
import { IUser } from '@/interface/user';

const columnHelper = createColumnHelper<IUser>();

export const columnDef = [
  columnHelper.display({
    id: 'check',
    cell: () => <Checkbox />,
    header: () => <Checkbox borderColor={'white'} />,
  }),
  columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: 'Name',
    id: 'name',
  }),
  columnHelper.accessor('email', {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: 'Email',
    id: 'email',
  }),
  columnHelper.accessor('phoneNumber', {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: 'Phone Number',
    id: 'phone-number',
  }),
  columnHelper.accessor('address', {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: 'Address',
    id: 'address',
  }),

  //   columnHelper.display({
  //     id: 'actions',
  //     cell: (props) => <RowActions row={props.row} />,
  //     header: 'Actions',
  //   }),
];
