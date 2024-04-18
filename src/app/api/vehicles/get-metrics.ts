import { ApiResponse } from '@/interface/api-response';
import { AuthAxios } from '@/lib/axios';
import {
  ExtractFnReturnType,
  QueryConfigType,
  useQuery,
} from '@/lib/react-query';

export const getMetrics = async () => {
  const axios = AuthAxios();
  const response = await axios.get<ApiResponse<any>>(`/vehicle/metrics`);
  return response.data;
};

type QueryFnType = typeof getMetrics;

export const useGetMetrics = (config?: QueryConfigType<QueryFnType>) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    retry(failureCount, error: any) {
      if ([404, 401].includes(error.status)) return false;
      else if (failureCount < 1) return true;
      else return false;
    },
    queryKey: ['get-vehicle-metrics'],
    queryFn: getMetrics,
    ...config,
  });
};
