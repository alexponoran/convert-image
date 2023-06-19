import { sveltekit } from '@sveltejs/kit/vite';
import { purgeCss } from 'vite-plugin-svelte-purgecss';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()]
});
