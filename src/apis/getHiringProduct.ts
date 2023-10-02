import { GetHiringDataList } from '@/constants/types/hiring';
import client from './client';

export const getHiringProduct = async (
  token: string,
  pid: number,
): Promise<GetHiringDataList> => {
  try {
    const url = `/api/v1/hiring/${pid}`;
    const data = await client.get(url, {
      headers: {
        Authorization: token,
      },
    });
    return data.data;
  } catch (error) {
    throw error;
  }
};
export default getHiringProduct;
