import { useAddServiceApi } from '@/app/api/service/add-service';
import { IService } from '@/interface/service';
import { useFormik } from 'formik';
import { FormEvent } from 'react';
// import { useToast } from '../useToast';
import { removeEmptyFields } from '@/utils/remove-empty-fields';
import { useGetAllServices } from '@/app/api/service/get-all-services';

export const useAddService = ({
  id,
  initialValues,
  onClose,
}: {
  id?: string;
  initialValues?: Partial<IService>;
  onClose: any;
}) => {
  const { mutateAsync, isPending } = useAddServiceApi();
  const { refetch } = useGetAllServices(id);
  //   const toast = useToast();

  const serviceInitialValues: Partial<IService> = {
    type: initialValues?.type ?? '',
    // user: initialValues?.user ?? '',
    // business: initialValues?.business ?? '',
    note: initialValues?.note ?? '',
    vehicle: initialValues?.vehicle ?? id ?? '',
    timeIn: initialValues?.timeIn ?? '',
    timeOut: initialValues?.timeOut ?? '',
    useDefaultTimeIn: initialValues?.useDefaultTimeIn ?? true,
    ownershipType: initialValues?.ownershipType ?? '',
  };

  const {
    values,
    handleSubmit,
    errors,
    handleChange,
    touched,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: serviceInitialValues,
    // validationSchema: userFormSchema,
    onSubmit: async (values) => {
      //   if (!values.ownershipType) {
      //     toast({ description: 'Please select ownership type', status: 'error' });
      //     return;
      //   }
      await mutateAsync(removeEmptyFields(values));
      refetch();
      onClose();
      //   console.log('values are ', removeEmptyFields(values));
    },
  });
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };

  return {
    values,
    errors,
    isPending,
    touched,
    handleBlur,
    setFieldValue,
    handleFormSubmit,
    handleChange,
  };
};
