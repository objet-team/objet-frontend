import client from './client';
import { GetProductPopularDto } from '@/constants/types/home';

export const getProductPopular = async (): Promise<GetProductPopularDto> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/product/popular`;
    console.log(url);
    return (await client.get(url)).data;
  } catch (error) {
    throw error;
  }
};
export default getProductPopular;
