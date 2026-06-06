import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: process.env['CI'] ? 2 : 0,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4200',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    // In CI the app is already built — serve the dist folder directly (fast).
    // Locally, ng serve gives hot-reload for development.
    command: process.env['CI']
      ? 'npx serve -s dist/portfolio-app/browser -l tcp://localhost:4200'
      : 'ng serve',
    url: 'http://localhost:4200',
    reuseExistingServer: !process.env['CI'],
    timeout: 120000,
  },
});
