import getHiringProduct from '@/apis/getHiringProduct';
import { GetHiringDataList } from '@/constants/types/hiring';
import { useQuery } from '@tanstack/react-query';
export const useGetHiringProduct = (token: string, pid: number) => {
  return useQuery<GetHiringDataList>(
    ['get_hiring_product'],
    () => getHiringProduct(token, pid),
    {
      staleTime: 300 * 1000,
    },
  );
};
