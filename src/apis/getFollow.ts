import client from './client';
export const getFollow = async (
  token: string,
  artistId: number,
): Promise<string> => {
  try {
    const url = `/api/v1/follow/${artistId}`;
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
export default getFollow;
