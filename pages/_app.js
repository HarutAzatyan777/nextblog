import React, { useMemo } from 'react';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Head from 'next/head'; // Import Head
import '../styles/globals.scss';
import { Layout } from '../components';
import GoogleAnalytics from '../utils/GoogleAnalytics';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Dynamic keyword generation with memoization
  const keywords = useMemo(() => {
    const pageKeywords = pageProps?.keywords || [];
    const additionalKeywords = [
      'web development',
      'programming',
      'javascript',
      'react',
      'nextjs',
      'SEO',
      'content marketing',
      'developer tools',
      'coding tutorials',
      'front-end development',
    ];
    return [...pageKeywords, ...additionalKeywords].join(', ');
  }, [pageProps]);

  const baseUrl = 'https://blog.devaura.site'; // Your base URL
  const dynamicUrl = `${baseUrl}${router.asPath}`; // Construct dynamic URL

  return (
    <>
      <Head>
        <link rel="publisher" href="https://devaura.site/" />
        <link rel="canonical" href={dynamicUrl} /> {/* Use dynamic URL */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultSeo
        title="Dev Aura - Insights and Resources for Developers"
        description="DevAura is your go-to blog for expert insights and resources on web development. Discover in-depth tutorials, coding tips, and industry news from seasoned developers. Stay ahead of the curve and elevate your skills with DevAura."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: dynamicUrl, // Use dynamic URL
          title: 'Dev Aura - Insights and Resources for Developers',
          description: 'Your go-to blog for development insights, tips, and resources.',
          images: [
            {
              url: 'https://blog.devaura.site/og-image.png', // Consider making this dynamic if needed
              width: 1200,
              height: 630,
              alt: 'Dev Aura Blog',
            },
          ],
          site_name: 'Dev Aura',
        }}
        twitter={{
          handle: '@DevAura',
          site: '@DevAura',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords,
          },
          {
            name: 'author',
            content: 'Harutyun Azatyan',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          {
            name: 'robots',
            content: 'index, follow',
          },
        ]}
      />

      <GoogleAnalytics />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
