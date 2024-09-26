import { getPosts, getCategories } from '../../services'; // Ensure the path to services is correct

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const posts = await getPosts();
  const categories = await getCategories();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Create the XML structure
  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
      <url>
        <loc>${baseUrl}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${posts
        .map(({ node }) => `
          <url>
            <loc>${`${baseUrl}/post/${node.slug}`}</loc>
            <changefreq>weekly</changefreq>
            <priority>0.7</priority>
            <lastmod>${new Date(node.createdAt).toISOString()}</lastmod>
          </url>
        `)
        .join('')}
      ${categories
        .map(({ slug }) => `
          <url>
            <loc>${`${baseUrl}/category/${slug}`}</loc>
            <changefreq>monthly</changefreq>
            <priority>0.5</priority>
          </url>
        `)
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
