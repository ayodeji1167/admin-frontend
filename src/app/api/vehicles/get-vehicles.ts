import { ApiResponse } from '@/interface/api-response';
import { GetAllVehicleResponseType } from '@/interface/vehicle';
import { AuthAxios } from '@/lib/axios';
import {
  ExtractFnReturnType,
  QueryConfigType,
  useQuery,
} from '@/lib/react-query';
import { constructUrl } from '@/utils/construct-url';

export const getAllVehicles = async (filter: any) => {
  const axios = AuthAxios();
  const response = await axios.get<ApiResponse<GetAllVehicleResponseType>>(
    constructUrl(`/vehicle`, filter)
  );
  return response.data;
};

type QueryFnType = typeof getAllVehicles;

export const useGetAllvehicles = (
  // data: Pick<GetAllDevicesRequest, 'filter'>,
  filter: any,
  config?: QueryConfigType<QueryFnType>
) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    retry(failureCount, error: any) {
      if ([404, 401].includes(error.status)) return false;
      else if (failureCount < 1) return true;
      else return false;
    },
    queryKey: ['get-all-devices', filter.pageIndex, filter?.search],
    queryFn: () => getAllVehicles(filter),

    ...config,
  });
};
