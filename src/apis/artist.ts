import { GetArtistMyPageDto } from '@/constants/types/mypage';
import client from './API';
import { PostArtistInfoReq, PostArtistInfoRes } from '@/constants/types/mypage';

// 유저가 아티스트 -> 아티스트 프로필 조회
export const getArtistInfo = async (
  token: string,
): Promise<GetArtistMyPageDto> => {
  try {
    const url = '/api/v1/artist/info';
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

// 특정 아티스트의 프로필을 조회
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

// 아티스트 정보 등록
export const postArtistInfo = async (
  token: string,
  requestData: PostArtistInfoReq,
): Promise<PostArtistInfoRes> => {
  try {
    const url = '/api/v1/artist/info';
    const data = await client.post(url, requestData, {
      headers: {
        Authorization: token,
      },
    });
    return await data.data;
  } catch (error) {
    throw error;
  }
};
