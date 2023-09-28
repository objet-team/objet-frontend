import { GetUserDto } from '@/constants/types/user';
import client from './client';
import { GetProductPopularDto } from '@/constants/types/home';
import { PostArtistInfoReq, PostArtistInfoRes } from '@/constants/types/mypage';

export const postArtistInfo = async (
  token: string,
  requestData: PostArtistInfoReq,
): Promise<PostArtistInfoRes> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/artist/info`;

    console.log('로그인진입');
    const data = await client.post(url, requestData, {
      headers: {
        Authorization: token,
      },
    });
    console.log(data);
    return await data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default postArtistInfo;
