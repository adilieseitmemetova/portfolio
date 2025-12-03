const paths = ["/", "/fr/"];

export function GET({ site }: { site: URL | undefined }) {
	const base =
		site?.toString().replace(/\/$/, "") || "http://localhost:4321";

	const urls = paths
		.map(
			(path) => `<url>
  <loc>${base}${path}</loc>
  <changefreq>monthly</changefreq>
  <priority>${path === "/" ? "1.0" : "0.8"}</priority>
</url>`,
		)
		.join("\n");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
