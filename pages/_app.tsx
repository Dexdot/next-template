/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { useStore } from '@/store/store';
import '@/styles/index.scss';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
