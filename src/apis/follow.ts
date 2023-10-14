import client from './API';

// 특정 아티스트 팔로우하기
export const followArtist = async (artistId: number): Promise<string> => {
  try {
    const url = `/api/v1/follow/${artistId}`;
    const res = await client.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// 특정 아티스트 팔로우 취소
export const cancelFollowArtist = async (artistId: number): Promise<string> => {
  try {
    const url = `/api/v1/follow/${artistId}`;
    const res = await client.delete(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// 특정 아티스트를 팔로우 할 수 있는지, 즉 현재 팔로우 상태가 아닌지를 확인
// 팔로우 안하고 있다면 반환값이 true
export const getFollowAvailability = async (
  artistId: number,
): Promise<boolean> => {
  try {
    const url = `/api/v1/follow/availability/${artistId}`;
    const res = await client.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};
