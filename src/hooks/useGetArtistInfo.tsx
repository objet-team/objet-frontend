import getAuthUserInfo from '@/apis/getAuthUserInfo';
import { useQuery } from '@tanstack/react-query';
import { GetArtistMyPageDto, GetMyPageDataDto } from '@/constants/types/mypage';
import getArtistInfo from '@/apis/getArtistInfo';
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
