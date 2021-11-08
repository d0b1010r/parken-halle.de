import { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import { globalStyles } from '../shared/styles';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  );
}
