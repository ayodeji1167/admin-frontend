import { ToastMessages } from '@/constants/toast-messages';
import { useToast } from '@/hooks/useToast';
import { AuthAxios } from '@/lib/axios';
import { MutationConfig } from '@/lib/react-query';
import { getErrorMessage } from '@/utils/get-error-message';
import { useMutation } from '@tanstack/react-query';

export const sendJobCompletionMail = async (id: string) => {
  const axios = AuthAxios();
  const response = await axios.post(`service/send/job-completion/${id}`);
  return response.data;
};

type MutationFnType = typeof sendJobCompletionMail;

export const useSendJobCompletionApi = (
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
    mutationKey: ['add-job-order'],
    mutationFn: sendJobCompletionMail,
    ...config,
  });
};
