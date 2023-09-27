import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import React from 'react';
import { Global } from '@emotion/react';
import { GlobalStyles } from '@/constants/styles';
import '@/assets/fonts/font.css';
import Script from 'next/script';

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  function kakaoInit() {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    console.log(window.Kakao.isInitialized());
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          onLoad={kakaoInit}
        ></Script>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
