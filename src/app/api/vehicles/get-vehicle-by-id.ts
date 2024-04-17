import { ApiResponse } from '@/interface/api-response';
import { IVehicle } from '@/interface/vehicle';
import { AuthAxios } from '@/lib/axios';
import {
  ExtractFnReturnType,
  QueryConfigType,
  useQuery,
} from '@/lib/react-query';

export const getVehicleById = async (id: string) => {
  const axios = AuthAxios();
  const response = await axios.get<ApiResponse<IVehicle>>(`/vehicle/${id}`);
  return response.data;
};

type QueryFnType = typeof getVehicleById;

export const useGetVehiclebyId = (
  id: any,
  config?: QueryConfigType<QueryFnType>
) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    retry(failureCount, error: any) {
      if ([404, 401].includes(error.status)) return false;
      else if (failureCount < 1) return true;
      else return false;
    },
    queryKey: ['get-vehicle-by-id', id],
    queryFn: () => getVehicleById(id),
    ...config,
  });
};
