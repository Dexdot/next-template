/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
// import { AppContext } from 'next/app';
import { useStore } from '@/store/store';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// App.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };
