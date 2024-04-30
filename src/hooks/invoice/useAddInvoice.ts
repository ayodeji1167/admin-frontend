import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useToast } from '../useToast';
import { useRouter } from 'next/navigation';
import { useGetServiceByIdApi } from '@/app/api/service/get-by-id';
import { useCreateInvoiceApi } from '@/app/api/invoice/create-invoice';

export const useAddInvoice = ({ serviceId }: any) => {
  const { refetch } = useGetServiceByIdApi(serviceId);
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [proceed, setProceed] = useState(false);
  const [invoiceItems, setInvoiceItems] = useState<
    Array<{ service: string; price: any; quantity: any; formattedAmount: any }>
  >([]);
  const [service, setService] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState('');
  const [formattedAmount, setFormattedAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState<any>();
  const { mutateAsync, isPending } = useCreateInvoiceApi();
  const router = useRouter();

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
      service: serviceId,
      items: invoiceItems,
    };

    await mutateAsync(payload);
    refetch();
    router.push(`/services/${serviceId}`);
    // console.log('invoices items are ====>', payload);

    // return invoiceItems;
  };

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
  };
};
