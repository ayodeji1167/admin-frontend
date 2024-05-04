/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useToast } from '../useToast';
import { useGetServiceByIdApi } from '@/app/api/service/get-by-id';
import { useGetInvoicebyidApi } from '@/app/api/invoice/get-by-id';
import { useEditInvoiceApi } from '@/app/api/invoice/edit-invoice';

export const useEditInvoice = ({ id }: any) => {
  const {
    data,
    isLoading: fetchInvoiceLoading,
    isSuccess: fetchInvoiceSuccess,
  } = useGetInvoicebyidApi(id, {
    enabled: Boolean(id),
  });
  const serviceId = data?.data?.service?._id;
  const { refetch } = useGetServiceByIdApi(serviceId, {
    enabled: Boolean(data?.data?.service?._id),
  });

  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [proceed, setProceed] = useState(false);
  const [invoiceItems, setInvoiceItems] = useState<
    Array<{ service: string; price: any; quantity: any; formattedAmount: any }>
  >(data?.data?.items || []);
  const [service, setService] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState('');
  const [formattedAmount, setFormattedAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState<any>();
  const { mutateAsync, isPending } = useEditInvoiceApi();
  // const router = useRouter();

  const addItem = () => {
    if (!service || !amount) {
      toast({ description: 'Add service/amount', status: 'error' });
      return;
    }
    invoiceItems.forEach((item) => {
      if (item.service.toLowerCase() === service.toLowerCase()) {
        const newItems = invoiceItems.filter(
          (item) => item.service.toLowerCase() !== service.toLowerCase()
        );
        setInvoiceItems(newItems);
      }
    });
    setInvoiceItems((prev) => [
      ...prev,
      { service, price: amount, quantity, formattedAmount },
    ]);
    setAmount('');
    setService('');
    setQuantity(1);
    setFormattedAmount('');
    setSelectedOption(null);
  };

  const deleteItem = (service: string) => {
    const newItems = invoiceItems.filter(
      (item) => item.service.toLowerCase() !== service.toLowerCase()
    );
    setInvoiceItems(newItems);
  };

  const onSave = async () => {
    const payload = {
      invoiceId: id,
      items: invoiceItems,
    };

    await mutateAsync(payload);
    refetch();
    // router.push(`/services/${serviceId}`);
    window.location.href = `/services/${serviceId}`;
  };

  useEffect(() => {
    setInvoiceItems(data?.data?.items);
  }, [fetchInvoiceSuccess]);
  return {
    onSave,
    deleteItem,
    selectedOption,
    setInvoiceItems,
    invoiceItems,
    amount,
    setAmount,
    quantity,
    setQuantity,
    addItem,
    setService,
    setSelectedOption,
    setFormattedAmount,
    isOpen,
    onClose,
    onOpen,
    setProceed,
    proceed,
    isPending,
    fetchInvoiceLoading,
  };
};
