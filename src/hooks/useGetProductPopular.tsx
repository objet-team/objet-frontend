import { getProductPopular } from '@/apis/product';
import { GetProductPopularDto } from '@/constants/types/home';
import { useQuery } from '@tanstack/react-query';
export const useGetProductPopular = () => {
  return useQuery<GetProductPopularDto>(
    ['get_prodcut_popular'],
    () => getProductPopular(),
    {
      staleTime: 300 * 1000,
    },
  );
};
