import { ToastMessages } from '@/constants/toast-messages';
import { useToast } from '@/hooks/useToast';
import { ApiResponse } from '@/interface/api-response';
import { AuthAxios } from '@/lib/axios';
import { MutationConfig } from '@/lib/react-query';
import { getErrorMessage } from '@/utils/get-error-message';
import { useMutation } from '@tanstack/react-query';

export const addImages = async (data: {
  data: FormData;
  vehicleId: string;
}) => {
  const axios = AuthAxios();
  const response = await axios.post<ApiResponse<any>>(
    `vehicle/add/images/${data.vehicleId}`,
    data.data
  );
  return response.data;
};

type MutationFnType = typeof addImages;

export const useAddImages = (config?: MutationConfig<MutationFnType>) => {
  const toast = useToast();

  return useMutation({
    onError: (err: any) => {
      toast({ status: 'error', description: getErrorMessage(err) });
    },
    onSuccess: () => {
      toast({ status: 'success', description: ToastMessages.operationSuccess });
    },
    retry: false,
    mutationKey: ['add-images-to-vehicle'],
    mutationFn: addImages,
    ...config,
  });
};
