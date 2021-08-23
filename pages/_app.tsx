import React from 'react';
import { AppProps } from 'next/app';
import LandingPageLayout from '../components/LandingPageLayout';
import '../styles/global.css';
// import '../styles/teaserpage.css';

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <LandingPageLayout>
      <Component {...pageProps} />
    </LandingPageLayout>
  );
}
