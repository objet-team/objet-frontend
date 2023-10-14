import client from './API';
import { GetGoodsPopularNormalDto } from '@/constants/types/shop';

export const getGoodsPopularNormal =
  async (): Promise<GetGoodsPopularNormalDto> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/goods/popular-normal`;
      const data = await client.get(url);
      return data.data;
    } catch (error) {
      throw error;
    }
  };
export default getGoodsPopularNormal;
