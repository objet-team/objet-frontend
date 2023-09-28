import getAuthUserInfo from '@/apis/getAuthUserInfo';
import { useQuery } from '@tanstack/react-query';
import { GetArtistMyPageDto, GetMyPageDataDto } from '@/constants/types/mypage';
import getArtistInfo from '@/apis/getArtistInfo';
import getArtistInfoPublic from '@/apis/getArtistInfoPublic';
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
