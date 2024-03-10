import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sveltekit()
	],

	server: {
		https: {
		  key: './key.pem',
		  cert: './cert.pem',
		},
		cors: {
			origin: 'localhost:3000', // oppure specifica l'origine consentita come il tuo dominio, ad esempio 'https://il-tuo-dominio.com'
			methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
			allowedHeaders: '*',
			exposedHeaders: '*',
		}
	  },
});
