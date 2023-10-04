import getFollowAvailability from '@/apis/getFolllowAvailability';
import getFollow from '@/apis/getFollow';
import { useQuery } from '@tanstack/react-query';
export const useGetFollowAvailability = (token: string, artistId: number) => {
  return useQuery<boolean>(
    ['get_follow_availability'],
    () => getFollowAvailability(token, artistId),
    {
      staleTime: 300 * 1000,
    },
  );
};
