import { StatusEnum } from '@/enum/status';

export interface IService {
  type: string;
  vehicle: string;
  business?: string;
  user?: string;
  model?: string;
  estimate?: string;
  invoice?: string;
  status: StatusEnum;
  note: string;
  remark: string;
  ownershipType?: string;
  technician: string;
  timeIn: any;
  timeOut: any;
  useDefaultTimeIn: boolean;
}
