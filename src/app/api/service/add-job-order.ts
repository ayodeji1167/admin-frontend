import { ToastMessages } from '@/constants/toast-messages';
import { useToast } from '@/hooks/useToast';
import { AuthAxios } from '@/lib/axios';
import { MutationConfig } from '@/lib/react-query';
import { getErrorMessage } from '@/utils/get-error-message';
import { useMutation } from '@tanstack/react-query';

export const addJobOrder = async (data: {
  form: FormData;
  serviceId: string;
}) => {
  const axios = AuthAxios();
  const response = await axios.post(
    `service/add-job-order/${data.serviceId}`,
    data.form
  );
  return response.data;
};

type MutationFnType = typeof addJobOrder;

export const useAddJobOrderApi = (config?: MutationConfig<MutationFnType>) => {
  const toast = useToast();

  return useMutation({
    onError: (err: any) => {
      toast({ status: 'error', description: getErrorMessage(err) });
    },
    onSuccess: () => {
      toast({ status: 'success', description: ToastMessages.operationSuccess });
    },
    retry: false,
    mutationKey: ['add-job-order'],
    mutationFn: addJobOrder,
    ...config,
  });
};
