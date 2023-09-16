import type { AppProps } from 'next/app';

import { Global } from '@emotion/react';
import { GlobalStyles } from '@/constants/styles';
import '@/assets/fonts/font.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Global styles={GlobalStyles} />
    <Component {...pageProps} />
  </>
);

export default App;
