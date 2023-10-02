import getProductNew from '@/apis/getProcutNew';
import getProductDetatil from '@/apis/getProductDetail';
import getProductPopular from '@/apis/getProductPopular';
import {
  GetProductData,
  GetProductNewDto,
  ProductDetailData,
} from '@/constants/types/home';
import { useQuery } from '@tanstack/react-query';
export const useGetProductDetail = (pid: number) => {
  return useQuery<ProductDetailData>(
    ['get_prodcut_new'],
    () => getProductDetatil(pid),
    {
      staleTime: 300 * 1000,
    },
  );
};
