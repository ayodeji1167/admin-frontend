import { ApiResponse } from '@/interface/api-response';
import { GetAllVehicleResponseType } from '@/interface/vehicle';
import { AuthAxios } from '@/lib/axios';
import {
  ExtractFnReturnType,
  QueryConfigType,
  useQuery,
} from '@/lib/react-query';

export const getAllVehicles = async () => {
  const axios = AuthAxios();
  const response =
    await axios.get<ApiResponse<GetAllVehicleResponseType>>(`/vehicle`);
  return response.data;
};

type QueryFnType = typeof getAllVehicles;

export const useGetAllvehicles = (
  // data: Pick<GetAllDevicesRequest, 'filter'>,
  config?: QueryConfigType<QueryFnType>
) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    retry(failureCount, error: any) {
      if ([404, 401].includes(error.status)) return false;
      else if (failureCount < 1) return true;
      else return false;
    },
    queryKey: ['get-all-devices'],
    queryFn: getAllVehicles,

    ...config,
  });
};
