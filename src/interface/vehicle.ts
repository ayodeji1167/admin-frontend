import { FuelTypeEnum, VehicleTypeEnum } from '@/enum/vehicle';
import { IFiles } from './file';

export interface IVehicle {
  name: string;

  make?: string;

  model?: string;

  images?: IFiles;

  vin: string;

  businessId: string;

  userId: string;

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
