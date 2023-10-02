import { GetArtistMyPageDto } from '@/constants/types/mypage';
import client from './client';
import { headers } from '../../next.config';

export const getArtistInfoPublic = async (
  token: string,
  id: number,
): Promise<GetArtistMyPageDto> => {
  try {
    const url = `/api/v1/artist/info/public/${id}`;
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
export default getArtistInfoPublic;
