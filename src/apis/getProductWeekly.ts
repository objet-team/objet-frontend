import client from './client';
import { GetProductWeeklyDto } from '@/constants/types/home';
import axios from 'axios';

export const getProductWeekly = async (): Promise<GetProductWeeklyDto> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product/weekly`;

    const data = await client.get(url);
    console.log(data);
    return data.data;
  } catch (error) {
    throw error;
  }
};
export default getProductWeekly;
