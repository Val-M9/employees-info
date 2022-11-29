import dayjs from 'dayjs';

const formatDate = (date: string) => {
  return dayjs(date).format('DD.MM.YYYY');
};

export { formatDate };
