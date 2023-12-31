import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import React from 'react';
import { Global } from '@emotion/react';
import { GlobalStyles } from '@/constants/styles';
import '@/assets/fonts/font.css';
import Script from 'next/script';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
