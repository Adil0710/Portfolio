export default function Sitemap() {
    const baseUrl = "https://devadil.vercel.app"; // Replace with your actual domain
  
    return new Response(
      `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>
      `,
      {
        headers: {
          "Content-Type": "application/xml",
        },
      }
    );
  }
  