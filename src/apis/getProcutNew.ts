import client from './client';
import { GetProductNewDto } from '@/constants/types/home';

export const getProductNew = async (): Promise<GetProductNewDto> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/product/new`;
    console.log(url);
    return (await client.get(url)).data;
  } catch (error) {
    throw error;
  }
};
export default getProductNew;
