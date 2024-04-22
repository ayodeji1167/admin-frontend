import { AuthAxios } from '@/lib/axios';
import {
  ExtractFnReturnType,
  QueryConfigType,
  useQuery,
} from '@/lib/react-query';

export const getAllBusiness = async () => {
  const axios = AuthAxios();
  const response = await axios.get(`/business`);
  return response.data;
};

type QueryFnType = typeof getAllBusiness;

export const useGetAllBusiness = (
  // data: Pick<GetAllDevicesRequest, 'filter'>,
  config?: QueryConfigType<QueryFnType>
) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    retry(failureCount, error: any) {
      if ([404, 401].includes(error.status)) return false;
      else if (failureCount < 1) return true;
      else return false;
    },
    queryKey: ['get-all-business'],
    queryFn: getAllBusiness,

    ...config,
  });
};
