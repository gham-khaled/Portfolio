import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/*.test.ts',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:4200',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npx ng serve --port 4200',
    port: 4200,
    timeout: 120000,
    reuseExistingServer: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
