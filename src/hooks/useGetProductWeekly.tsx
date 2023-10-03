import { getProductWeekly } from '@/apis/product';
import { GetProductWeeklyDto } from '@/constants/types/home';
import { useQuery } from '@tanstack/react-query';
export const useGetProductWeekly = () => {
  return useQuery<GetProductWeeklyDto>(
    ['get_prodcut_weekly'],
    () => getProductWeekly(),
    {
      staleTime: 300 * 1000,
    },
  );
};
