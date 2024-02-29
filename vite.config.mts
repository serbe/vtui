/// <reference types="histoire" />

import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'vtui',
			fileName: (format) => `vtui.${format}.ts`,
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
	plugins: [vue(),dts({
		insertTypesEntry: true,
	}),],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	histoire: {
		setupFile: resolve(__dirname, 'src/histoire.setup.ts'),
	},

});
