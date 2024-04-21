import { FuelTypeEnum, VehicleTypeEnum } from '@/enum/vehicle';
import { IFiles } from './file';
import { IUser } from './user';

export interface IVehicle {
  name: string;
  _id: string;

  make?: string;

  model?: string;

  images?: IFiles;

  vin: string;

  business: string;

  user: IUser;

  color: string;

  type: VehicleTypeEnum | string;

  mileage: string;

  fuelType: FuelTypeEnum | string;

  insuranceIds: Array<string>;

  licenseIds: Array<string>;

  lastServiceDate: string;

  lastRepairDate: string;

  status: string;
  registrationNumber: string;
  ownershipType: string;
  year: string;
}

export interface GetAllVehicleResponseType {
  pageNo: number;
  total: number;
  pageSize: number;
  vehicles: Array<IVehicle>;
}
