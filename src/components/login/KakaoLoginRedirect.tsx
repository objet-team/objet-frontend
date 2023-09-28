import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import api from '@/services/TokenService';
import getAuthLogin, { postAuthLogin } from '@/apis/postAuthLogin';

const KakaoLoginRedirect = () => {
  const router = useRouter();
  const params = useSearchParams();
  const codeParam: string = params.get('code') as string;

  useEffect(() => {
    if (codeParam != null) {
      const fetchData = async () => {
        const response = await postAuthLogin(codeParam);
        console.log(response);
        const { accessToken, role, userId, userName } = response;
        if (accessToken) {
          api.setToken(accessToken);
          api.setId(userId);
          api.setRole(role);
          api.setName(userName);
          router.push('/');
        }
      };
      fetchData();
    }
  }, [codeParam]);
  return <div>로그인중!</div>;
};

export default KakaoLoginRedirect;
