import { getFollowAvailability } from '@/apis/follow';

import { useQuery } from '@tanstack/react-query';
export const useGetFollowAvailability = (token: string, artistId: number) => {
  return useQuery<boolean>(
    ['get_follow_availability'],
    () => getFollowAvailability(artistId),
    {
      staleTime: 300 * 1000,
    },
  );
};
