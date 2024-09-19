// pages/_app.js
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

import '../styles/globals.scss';
import { Layout } from '../components';
import GoogleAnalytics from '../utils/GoogleAnalytics'; // Import the GoogleAnalytics component

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
      </Head>
      <GoogleAnalytics /> {/* Include the GoogleAnalytics component */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
