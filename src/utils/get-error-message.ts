export const getErrorMessage = (error: any) => {
  if (typeof error?.response?.data?.message === 'string') {
    return error?.response?.data?.message;
  }
  if (
    typeof error?.response?.data?.error === 'string' &&
    !error?.response?.data?.message
  ) {
    return error?.response?.data?.error;
  }

  return error?.response?.data
    ? error?.response?.data?.message[0]
    : error?.message === 'Network Error'
      ? 'We are unable to connect, please check your network'
      : error?.message;
};
