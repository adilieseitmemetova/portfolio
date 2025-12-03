// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Pick up the real production domain from env; fall back to localhost for dev
const site = process.env.SITE_URL || 'http://localhost:4321/';

export default defineConfig({
	site,
});
