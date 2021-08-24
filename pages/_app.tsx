import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import LandingPageLayout from '../components/LandingPageLayout';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LandingPageLayout>
      <Head>
        <title>Tchelinux</title>
        <meta name="keywords" content="tchelinux, linux, linuxrs, opensource, open source, linux rs" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&family=Poppins:ital,wght@0,200;1,200&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </LandingPageLayout>
  );
}
