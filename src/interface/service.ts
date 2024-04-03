import { ServiceTypeEnum } from '@/enum/service';

export interface IService {
  type: ServiceTypeEnum;

  vehicleId: string;

  companyId?: string;

  userId?: string;

  model?: string;

  estimateId?: string;

  invoiceId?: string;

  status: string;

  note: string;

  remark: string;
  technician: string;

  timeIn: Date;

  timeOut: Date;
}
