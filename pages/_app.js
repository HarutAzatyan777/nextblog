import React from 'react';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router'; // Import useRouter
import '../styles/globals.scss';
import { Layout } from '../components';
import GoogleAnalytics from '../utils/GoogleAnalytics';

function MyApp({ Component, pageProps }) {
  const router = useRouter(); // Get the router object

  // Dynamic keyword generation
  function getKeywords() {
    const pageKeywords = pageProps?.keywords || []; // Pull keywords from pageProps
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
  }

  const keywords = getKeywords();
  const baseUrl = 'https://blog.devaura.site'; // Your base URL
  const dynamicUrl = `${baseUrl}${router.asPath}`; // Construct dynamic URL

  return (
    <>
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
              url: 'https://blog.devaura.site/og-image.png',
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
