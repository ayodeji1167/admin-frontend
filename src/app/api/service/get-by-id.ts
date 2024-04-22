// import { ApiResponse } from '@/interface/api-response';
// import { IService } from '@/interface/service';
import { AuthAxios } from '@/lib/axios';
import {
  ExtractFnReturnType,
  QueryConfigType,
  useQuery,
} from '@/lib/react-query';

export const getServiceById = async (id: string) => {
  const axios = AuthAxios();
  const response = await axios.get(`/service/${id}`);
  return response.data;
};

type QueryFnType = typeof getServiceById;

export const useGetServiceByIdApi = (
  id: any,
  config?: QueryConfigType<QueryFnType>
) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    retry(failureCount, error: any) {
      if ([404, 401].includes(error.status)) return false;
      else if (failureCount < 1) return true;
      else return false;
    },
    queryKey: ['get-service-by-id', id],
    queryFn: () => getServiceById(id),
    ...config,
  });
};
