import { FuelTypeEnum, VehicleTypeEnum } from '@/enum/vehicle';
import { IFiles } from './file';

export interface IVehicle {
  name: string;
  _id: string;

  make?: string;

  model?: string;

  images?: IFiles;

  vin: string;

  businessId: string;

  user: { firstName: string; lastName: string };

  color: string;

  type: VehicleTypeEnum;

  mileage: number;

  fuelType: FuelTypeEnum;

  insuranceIds: Array<string>;

  licenseIds: Array<string>;

  lastServiceDate: string;

  lastRepairDate: string;

  status: string;
}

export interface GetAllVehicleResponseType {
  pageNo: number;
  total: number;
  pageSize: number;
  vehicles: Array<IVehicle>;
}
