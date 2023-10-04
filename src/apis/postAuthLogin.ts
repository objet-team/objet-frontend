import { GetUserDto } from '@/constants/types/user';
import client from './client';

export const postAuthLogin = async (codeParam: string): Promise<GetUserDto> => {
  try {
    const data = await client.post('/api/v1/auth/kakao', {
      authorizationCode: codeParam,
      isLocal: true,
    });
    return await data.data;
  } catch (error) {
    throw error;
  }
};
export default postAuthLogin;
