import { ServiceTypeEnum } from '@/enum/service';
import { StatusEnum } from '@/enum/status';

export interface IService {
  type: ServiceTypeEnum;

  vehicleId: string;

  companyId?: string;

  userId?: string;

  model?: string;

  estimateId?: string;

  invoiceId?: string;

  status: StatusEnum;

  note: string;

  remark: string;
  technician: string;

  timeIn: Date;

  timeOut: Date;
}
