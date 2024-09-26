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
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Dev Aura - Insights and resources for developers" />
        <meta name="author" content="Harutyun Azatyan" />
        <meta name="keywords" content="web development, developer blog, Dev Aura, coding, programming" />
        <meta name="robots" content="index, follow" />

        <title>Dev Aura - Insights and Resources for Developers</title>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Dev Aura" />
        <meta property="og:description" content="Your go-to blog for development insights, tips, and resources." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blog.devaura.site/" />
        <meta property="og:image" content="https://blog.devaura.site/og-image.png" /> {/* Add actual image URL */}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dev Aura" />
        <meta name="twitter:description" content="Developer insights, coding tips, and resources." />
        <meta name="twitter:image" content="https://blog.devaura.site/twitter-image.png" /> {/* Add actual image URL */}
        <meta name="twitter:site" content="@DevAura" /> {/* Add your Twitter handle */}

        {/* Fonts */}
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
