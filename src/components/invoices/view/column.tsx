import { createColumnHelper } from '@tanstack/react-table';
import Box from '@/components/ui/chakra/Box';
import { Checkbox } from '@chakra-ui/react';
import RowActions from './row-action-list';
import { IInvoice } from '@/interface/invoice';
import Status from '@/components/common/Status';

const columnHelper = createColumnHelper<IInvoice>();

export const columnDef = [
  columnHelper.display({
    id: 'check',
    cell: () => <Checkbox />,
    header: () => <Checkbox borderColor={'white'} />,
  }),
  columnHelper.accessor('invoiceNumber', {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: 'Invoice Number',
    id: 'invoice-number',
  }),
  columnHelper.accessor('issuedDate', {
    cell: (info) => <Box>{info.getValue().toISOString()}</Box>,
    header: 'Issued Date',
    id: 'issued-date',
  }),
  columnHelper.accessor('dueDate', {
    cell: (info) => <Box>{info.getValue().toISOString()}</Box>,
    header: 'Due Date',
    id: 'due-date',
  }),
  columnHelper.accessor('totalAmount', {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: 'Amount',
    id: 'amount',
  }),
  columnHelper.accessor('userId', {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: 'Customer',
    id: 'customer',
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
