import type { AppProps } from 'next/app';

import { Global } from '@emotion/react';
import { GlobalStyles } from '@/constants/styles';
import '@/assets/fonts/font.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </>
  );
}
