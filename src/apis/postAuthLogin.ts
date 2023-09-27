import client from './client';
import { GetProductPopularDto } from '@/constants/types/home';

export const postAuthLogin = async (codeParam: string): Promise<string> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/kakao`;
    console.log(url);
    return (
      await client.post(url, {
        data: codeParam,
      })
    ).data;
  } catch (error) {
    throw error;
  }
};
export default postAuthLogin;
