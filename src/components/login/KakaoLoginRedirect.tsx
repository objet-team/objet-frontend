import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import api from '@/services/TokenService';
import { UserInfoAtomProps, userInfoAtom } from '@/states/UserInfoAtom';
import getAuthLogin from '@/apis/getAuthLogin';

const KakaoLoginRedirect = () => {
  const router = useRouter();
  const params = useSearchParams();
  const codeParam: string = params.get('code') as string;
  const setUserInfo = useSetRecoilState(userInfoAtom);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAuthLogin(codeParam);
      console.log(response);
      const { email, name, token } = response.data;
      const userInfo: UserInfoAtomProps = {
        name,
        email,
      };
      setUserInfo(userInfo);
      if (token) {
        api.setToken(token);
      }
      router.push('/');
    };
    if (codeParam != null) {
      fetchData();
    }
  }, [codeParam]);
  return <div />;
};

export default KakaoLoginRedirect;
