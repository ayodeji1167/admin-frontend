import { ToastMessages } from '@/constants/toast-messages';
import { useToast } from '@/hooks/useToast';
import { ApiResponse } from '@/interface/api-response';
import { AuthAxios } from '@/lib/axios';
import { MutationConfig } from '@/lib/react-query';
import { getErrorMessage } from '@/utils/get-error-message';
import { useMutation } from '@tanstack/react-query';

export const createInvoice = async (data: any) => {
  const axios = AuthAxios();
  const response = await axios.post<ApiResponse<any>>(`invoice`, data);
  return response.data;
};

type MutationFnType = typeof createInvoice;

export const useCreateInvoiceApi = (
  config?: MutationConfig<MutationFnType>
) => {
  const toast = useToast();

  return useMutation({
    onError: (err: any) => {
      toast({ status: 'error', description: getErrorMessage(err) });
    },
    onSuccess: () => {
      toast({ status: 'success', description: ToastMessages.operationSuccess });
    },
    retry: false,
    mutationKey: ['create-invoice'],
    mutationFn: createInvoice,
    ...config,
  });
};
