// pages/_app.js
import React from 'react';
import Head from 'next/head';

import '../styles/globals.scss';
import { Layout } from '../components';
import GoogleAnalytics from '../utils/GoogleAnalytics';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
      </Head>
      <GoogleAnalytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
