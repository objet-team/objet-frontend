import getGoodsPopularNormal from '@/apis/getGoodsPopularNormal';
import { GetGoodsPopularNormalDto } from '@/constants/types/shop';
import { useQuery } from '@tanstack/react-query';
export const useGetGoodsPopularNormal = () => {
  return useQuery<GetGoodsPopularNormalDto>(
    ['get_goods_popular_normal'],
    () => getGoodsPopularNormal(),
    {
      staleTime: 300 * 1000,
    },
  );
};
