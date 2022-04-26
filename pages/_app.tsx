import '../styles/globals.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

import type { AppProps } from 'next/app';
import React from 'react';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
