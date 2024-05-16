import { IService } from '@/interface/service';
import { useFormik } from 'formik';
import { FormEvent } from 'react';
// import { useToast } from '../useToast';
import { useGetAllServices } from '@/app/api/service/get-all-services';
import { useGetServiceByIdApi } from '@/app/api/service/get-by-id';
import { useEditServiceApi } from '@/app/api/service/edit-service';

export const useEditService = ({ serviceId }: { serviceId?: string }) => {
  const { data } = useGetServiceByIdApi(serviceId);

  const vehicleId = data?.data?.vehicle?._id;
  const { mutateAsync, isPending } = useEditServiceApi();
  const { refetch } = useGetAllServices(
    {
      pageIndex: 0,
      pageSize: 1,
      vehicleId,
    },
    { enabled: Boolean(vehicleId) }
  );

  const timeIn = data?.data?.timeIn ? new Date(data.data.timeIn) : null;
  const timeOut = data?.data?.timeOut ? new Date(data.data.timeOut) : '';
  const serviceInitialValues: Partial<IService> = {
    type: data?.data?.type ?? '',
    note: data?.data?.note ?? '',
    status: data?.data?.status ?? '',
    vehicle: vehicleId ?? '',
    timeIn,
    timeOut,
    useDefaultTimeOut: !timeOut,
    ownershipType: data?.data?.ownershipType ?? '',
  };

  // console.log("serv inital", serviceInitialValues);

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
    enableReinitialize: true,
    onSubmit: async (values) => {
      // const date = new Date(values.timeIn);
      // const timeIn = `${date.getFullYear()}-${String(
      //   date.getMonth() + 1
      // ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T${String(
      //   date.getHours()
      // ).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
      const timeOut = values.useDefaultTimeOut ? new Date() : values.timeOut;
      // console.log('values are ', { ...values, timeOut });
      // return;
      await mutateAsync({
        serviceId: String(serviceId),
        data: { ...values, timeOut },
      });
      // console.log({
      //   serviceId: String(serviceId),
      //   data: { ...values, timeOut },
      // });
      // return;
      refetch();
      window.location.href = `/services/${serviceId}`;
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
