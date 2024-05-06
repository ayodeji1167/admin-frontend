import { ApiResponse } from '@/interface/api-response';
import { AuthAxios } from '@/lib/axios';
import {
  ExtractFnReturnType,
  QueryConfigType,
  useQuery,
} from '@/lib/react-query';

export const getInvoiceById = async (id: string) => {
  const axios = AuthAxios();
  const response = await axios.get<ApiResponse<any>>(`/invoice/${id}`);
  return response.data;
};

type QueryFnType = typeof getInvoiceById;

export const useGetInvoicebyidApi = (
  id: any,
  config?: QueryConfigType<QueryFnType>
) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    retry(failureCount, error: any) {
      if ([404, 401].includes(error.status)) return false;
      else if (failureCount < 1) return true;
      else return false;
    },
    gcTime: 1,
    queryKey: ['get-invoice-by-id', id],
    queryFn: () => getInvoiceById(id),
    ...config,
  });
};
