import { useQuery } from '@tanstack/react-query';
import { GetArtistMyPageDto } from '@/constants/types/mypage';
import { getArtistInfo } from '@/apis/artist';

export const useGetArtistInfo = (token: string) => {
  return useQuery<GetArtistMyPageDto>(
    ['get_artist_info'],
    () => getArtistInfo(token),
    {
      staleTime: 3 * 1000,
      notifyOnChangeProps: ['data'],
    },
  );
};
