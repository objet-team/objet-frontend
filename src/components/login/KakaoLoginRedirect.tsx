import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import api from '@/services/TokenService';
import { UserInfoAtomProps, userInfoAtom } from '@/states/UserInfoAtom';
import getAuthLogin, { postAuthLogin } from '@/apis/postAuthLogin';

const KakaoLoginRedirect = () => {
  const router = useRouter();
  const params = useSearchParams();
  const codeParam: string = params.get('code') as string;
  useEffect(() => {
    const fetchData = async () => {
      const response = await postAuthLogin(codeParam);
      console.log(response);
      const token = response;
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
