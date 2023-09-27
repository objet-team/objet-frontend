import client from './client';
import { GetProductNewDto } from '@/constants/types/home';

export const getProductNew = async (): Promise<GetProductNewDto> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product/new`;
    const data = await client.get(url);
    return data.data;
  } catch (error) {
    throw error;
  }
};
export default getProductNew;
