import client from './client';
export const getFollowAvailability = async (
  token: string,
  artistId: number,
): Promise<boolean> => {
  try {
    const url = `/api/v1/follow/availability/${artistId}`;
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
export default getFollowAvailability;
