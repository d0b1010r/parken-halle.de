import { AppProps } from 'next/app';
import { globalStyles } from '../shared/styles';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}
