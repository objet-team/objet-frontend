import { PostHiringReq, PostHiringRes } from '@/constants/types/user';
import client from './API';

export const postHiring = async (
  token: string,
  id: number,
  requestData: PostHiringReq,
): Promise<PostHiringRes> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/hiring/${id}`;

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
export default postHiring;
