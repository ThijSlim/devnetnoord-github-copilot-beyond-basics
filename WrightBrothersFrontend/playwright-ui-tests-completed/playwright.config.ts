import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://localhost:5173',
    headless: false,
  },
};

export default config;