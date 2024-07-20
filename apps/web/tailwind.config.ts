import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}', './app/**/*.tsx'],
  presets: [sharedConfig],
};

export default config;
