export function GET({ site }: { site: URL | undefined }) {
	const base =
		site?.toString().replace(/\/$/, "") || "http://localhost:4321";

	const body = `User-agent: *
Allow: /
Sitemap: ${base}/sitemap.xml
`;

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain",
		},
	});
}
