import { GetUserDto } from '@/constants/types/user';
import client from './API';

export const postAuthLogin = async (codeParam: string): Promise<GetUserDto> => {
  try {
    const data = await client.post('/api/v1/auth/kakao', {
      authorizationCode: codeParam,
      isLocal: false,
    });
    return await data.data;
  } catch (error) {
    throw error;
  }
};
export default postAuthLogin;
