import { AuthAxios } from '@/lib/axios';
import {
  ExtractFnReturnType,
  QueryConfigType,
  useQuery,
} from '@/lib/react-query';

export const generateInvoicePdf = async (id: string) => {
  const axios = AuthAxios();
  const response = await axios.get(`/service/generate-invoice/${id}`);
  return response.data;
};

type QueryFnType = typeof generateInvoicePdf;

export const useGenerateInvoicePdf = (
  id: any,
  config?: QueryConfigType<QueryFnType>
) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    retry(failureCount, error: any) {
      if ([404, 401].includes(error.status)) return false;
      else if (failureCount < 1) return true;
      else return false;
    },
    queryKey: ['get-invoice-pdf-by-service-id', id],
    queryFn: () => generateInvoicePdf(id),
    ...config,
  });
};
