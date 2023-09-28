import { GetArtistMyPageDto } from '@/constants/types/mypage';
import client from './client';
import { headers } from '../../next.config';

export const getArtistInfo = async (
  token: string,
): Promise<GetArtistMyPageDto> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/artist/info`;
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
export default getArtistInfo;
