import { StatusEnum } from '@/enum/status';
import { IInvoice } from '@/interface/invoice';

export const invoices: { data: Array<IInvoice>; meta: any } = {
  data: [
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '1',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 500,
      invoiceNumber: 'INV001',
      userId: 'user001',
      vehicleId: 'vehicle001',
      status: StatusEnum.PENDING,
    },
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '2',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 750,
      invoiceNumber: 'INV002',
      userId: 'user002',
      vehicleId: 'vehicle002',
      status: StatusEnum.PENDING,
    },
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '3',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 900,
      invoiceNumber: 'INV003',
      userId: 'user003',
      vehicleId: 'vehicle003',
      status: StatusEnum.PAID,
    },
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '4',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 600,
      invoiceNumber: 'INV004',
      userId: 'user004',
      vehicleId: 'vehicle004',
      status: StatusEnum.FAILED,
    },
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '5',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 800,
      invoiceNumber: 'INV005',
      userId: 'user005',
      vehicleId: 'vehicle005',
      status: StatusEnum.REFUNDED,
    },
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '6',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 700,
      invoiceNumber: 'INV006',
      userId: 'user006',
      vehicleId: 'vehicle006',
      status: StatusEnum.PAID,
    },
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '7',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 950,
      invoiceNumber: 'INV007',
      userId: 'user007',
      vehicleId: 'vehicle007',
      status: StatusEnum.PAID,
    },
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '8',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 850,
      invoiceNumber: 'INV008',
      userId: 'user008',
      vehicleId: 'vehicle008',
      status: StatusEnum.PAID,
    },
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '9',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 700,
      invoiceNumber: 'INV009',
      userId: 'user009',
      vehicleId: 'vehicle009',
      status: StatusEnum.PAID,
    },
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '10',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 600,
      invoiceNumber: 'INV010',
      userId: 'user010',
      vehicleId: 'vehicle010',
      status: StatusEnum.PENDING,
    },
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '11',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 1000,
      invoiceNumber: 'INV011',
      userId: 'user011',
      vehicleId: 'vehicle011',
      status: StatusEnum.PENDING,
    },
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '12',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 850,
      invoiceNumber: 'INV012',
      userId: 'user012',
      vehicleId: 'vehicle012',
      status: StatusEnum.PENDING,
    },
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '13',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 750,
      invoiceNumber: 'INV013',
      userId: 'user013',
      vehicleId: 'vehicle013',
      status: StatusEnum.PENDING,
    },
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '14',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 900,
      invoiceNumber: 'INV014',
      userId: 'user014',
      status: StatusEnum.PENDING,
      vehicleId: 'vehicle014',
    },
    {
      issuedDate: new Date('2024-03-27T08:00:00'),
      id: '15',
      dueDate: new Date('2024-03-27T08:00:00'),
      totalAmount: 800,
      invoiceNumber: 'INV015',
      userId: 'user015',
      vehicleId: 'vehicle015',
      status: StatusEnum.PENDING,
    },
  ],
  meta: {
    total: 100,
    currentPage: 1,
    nextPage: 2,
  },
};