import { useGetServiceByIdApi } from '@/app/api/service/get-by-id';
import { getLastFourItems } from '@/utils/get-last-4-items';
import { useDisclosure } from '@chakra-ui/react';

export const useGetService = ({ id }: { id?: string }) => {
  const { data, isLoading, refetch } = useGetServiceByIdApi(id);
  const addImagesDisclosure = useDisclosure();

  const ownerName =
    data?.data?.ownershipType === 'individual'
      ? `${data?.data?.user?.firstName} ${data?.data?.user?.lastName}`
      : `${data?.data?.business?.slug}`;
  const ownerLink =
    data?.data?.ownershipType === 'individual'
      ? `/customers/${data?.data?.user?._id}`
      : `/business/${data?.data?.business?._id}`;
  const images = getLastFourItems<any>(
    data?.data?.images?.map((item: any) => item.url)
  );
  const hasOwner = Boolean(data?.data?.user) || Boolean(data?.data?.business);
  const hasImages = data?.data?.images && data?.data?.images?.length > 0;
  return {
    data,
    isLoading,
    refetch,
    ownerLink,
    ownerName,
    images,
    hasImages,
    hasOwner,
    addImagesDisclosure,
  };
};
