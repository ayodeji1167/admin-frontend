import { AuthAxios } from '@/lib/axios';
import {
  ExtractFnReturnType,
  QueryConfigType,
  useQuery,
} from '@/lib/react-query';

export const getAllServices = async (pagination: any) => {
  const axios = AuthAxios();
  const response = await axios.get(
    `/service?pageNumber=${pagination.pageIndex + 1}&pageSize=${pagination.pageSize}`
  );
  return response.data;
};

type QueryFnType = typeof getAllServices;

export const useGetAllServices = (
  // data: Pick<GetAllDevicesRequest, 'filter'>,
  pagination: any,
  config?: QueryConfigType<QueryFnType>
) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    retry(failureCount, error: any) {
      if ([404, 401].includes(error.status)) return false;
      else if (failureCount < 1) return true;
      else return false;
    },
    queryKey: ['get-all-services', pagination.pageIndex],
    queryFn: () => getAllServices(pagination),

    ...config,
  });
};
