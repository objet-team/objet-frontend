import getAuthUserInfo from '@/apis/getAuthUserInfo';
import { useQuery } from '@tanstack/react-query';
import { GetMyPageDataDto } from '@/constants/types/mypage';
export const useGetAuthUserInfo = (token: string) => {
  return useQuery<GetMyPageDataDto>(
    ['get_auth_mypage'],
    () => getAuthUserInfo(token),
    {
      staleTime: 3 * 1000,
      notifyOnChangeProps: ['data'],
    },
  );
};
