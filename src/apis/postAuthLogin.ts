import client from './client';
import { GetProductPopularDto } from '@/constants/types/home';

export const postAuthLogin = async (codeParam: string): Promise<string> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/kakao`;

    const data = await client.post(url, {
      authorizationCode: codeParam,
    });
    console.log(data);
    return data.data;
  } catch (error) {
    throw error;
  }
};
export default postAuthLogin;
