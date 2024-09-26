import { getCategories, getPosts } from '../../services'; // Adjust the path if necessary

const generateSitemap = (posts, categories) => {
  const postUrls = posts.map(({ node }) => {
    return `<url>
      <loc>${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${node.slug}`}</loc>
      <lastmod>${new Date(node.createdAt).toISOString()}</lastmod>
    </url>`;
  });

  const categoryUrls = categories.map(({ slug }) => {
    return `<url>
      <loc>${`${process.env.NEXT_PUBLIC_SITE_URL}/category/${slug}`}</loc>
    </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${postUrls.join('')}
    ${categoryUrls.join('')}
  </urlset>`;
};

export default async function Sitemap(req, res) {
  const posts = await getPosts();
  const categories = await getCategories();

  const sitemap = generateSitemap(posts, categories);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}
