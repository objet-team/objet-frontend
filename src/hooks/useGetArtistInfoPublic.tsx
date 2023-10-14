import { useQuery } from '@tanstack/react-query';
import { GetArtistMyPageDto } from '@/constants/types/mypage';
import { getArtistInfoPublic } from '@/apis/artist';

export const useGetArtistInfoPublic = (token: string, id: number) => {
  return useQuery<GetArtistMyPageDto>(
    ['get_artist_info_public'],
    () => getArtistInfoPublic(token, id),
    {
      staleTime: 3 * 1000,
      notifyOnChangeProps: ['data'],
    },
  );
};
