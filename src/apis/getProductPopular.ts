import client from './client';
import { GetProductPopularDto } from '@/constants/types/home';
import axios from 'axios';

export const getProductPopular = async (): Promise<GetProductPopularDto> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product/popular`;

    const data = await client.get(url);
    console.log(data);
    return data.data;
  } catch (error) {
    throw error;
  }
};
export default getProductPopular;
