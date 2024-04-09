import { StatusEnum } from '@/enum/status';

export interface IInvoice {
  issuedDate: Date;
  dueDate: Date;
  totalAmount: number;
  invoiceNumber: string;
  userId: string;
  vehicleId: string;
  id: string;
  status: StatusEnum;
}
