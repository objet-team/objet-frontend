import { GetUserDto } from '@/constants/types/user';
import client from './client';
import { GetProductPopularDto } from '@/constants/types/home';

export const postAuthLogin = async (codeParam: string): Promise<GetUserDto> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/kakao`;

    console.log('로그인진입');
    const data = await client.post(url, {
      authorizationCode: codeParam,
      isLocal: false,
    });
    console.log(data);
    return await data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default postAuthLogin;
