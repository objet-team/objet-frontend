import { GetMyPageDataDto } from '@/constants/types/mypage';
import client from './API';
import { headers } from '../../next.config';

export const getAuthUserInfo = async (
  token: string,
): Promise<GetMyPageDataDto> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/user/info`;
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
export default getAuthUserInfo;
