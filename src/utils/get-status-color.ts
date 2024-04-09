import { StatusEnum } from '@/enum/status';

export const getColor = (
  status: StatusEnum
): { textColor: string; bgColor: string } => {
  if (
    status === StatusEnum.PAID ||
    status === StatusEnum.REFUNDED ||
    status === StatusEnum.COMPLETED
  ) {
    return { bgColor: '#E8F3E8', textColor: '#00B200' };
  } else if (
    status === StatusEnum.PENDING ||
    status === StatusEnum.PROCESSING
  ) {
    return { bgColor: '#FBF6E7', textColor: '#333638' };
  } else if (status === StatusEnum.FAILED || status === StatusEnum.CANCELLED) {
    return { bgColor: '#F8E7E7', textColor: '#BB1111' };
  }
  return { bgColor: 'transparent', textColor: 'black' };
};
