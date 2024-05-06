import { ToastMessages } from '@/constants/toast-messages';
import { useToast } from '@/hooks/useToast';
import { AuthAxios } from '@/lib/axios';
import { MutationConfig } from '@/lib/react-query';
import { getErrorMessage } from '@/utils/get-error-message';
import { useMutation } from '@tanstack/react-query';

export const editService = async (data: { data: any; serviceId: string }) => {
  const axios = AuthAxios();
  const response = await axios.put(`service/${data.serviceId}`, data.data);
  return response.data;
};

type MutationFnType = typeof editService;

export const useEditServiceApi = (config?: MutationConfig<MutationFnType>) => {
  const toast = useToast();

  return useMutation({
    onError: (err: any) => {
      toast({ status: 'error', description: getErrorMessage(err) });
    },
    onSuccess: () => {
      toast({ status: 'success', description: ToastMessages.operationSuccess });
    },
    retry: false,
    mutationKey: ['edit-service'],
    mutationFn: editService,
    ...config,
  });
};
