import { StatusEnum } from '@/enum/status';

export interface IInspection {
  date: Date;
  id: string;
  status: StatusEnum;
  customerName: string;
  vehicleName: string;
  inspector: string;
}
