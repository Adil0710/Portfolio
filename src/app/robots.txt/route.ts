// app/robots.txt/route.ts
export async function GET() {
    const robots = `
    User-agent: *
    Allow: /
  
    Sitemap: https://devadil.vercel.app/sitemap.xml
    `;
  
    return new Response(robots, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  