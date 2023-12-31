import { getProductNew } from '@/apis/product';
import { GetProductNewDto } from '@/constants/types/home';
import { useQuery } from '@tanstack/react-query';
export const useGetProductNew = () => {
  return useQuery<GetProductNewDto>(
    ['get_prodcut_new'],
    () => getProductNew(),
    {
      staleTime: 300 * 1000,
    },
  );
};
