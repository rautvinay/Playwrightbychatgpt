// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { environments } from './config/environments.js';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const environment = process.env.ENV || 'qa';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  navigationTimeout: 30000,
expect: {
  timeout: 5000,
},
  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Number of workers */
  workers: 2,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
  ['list'],
  ['html']
],

  /* Shared settings for all the projects below. */
  use: {

    /* Base URL based on selected environment */
    baseURL: environments[environment].baseURL,
    storageState: 'auth.json',
   viewport: { width: 1280, height: 720 },

    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },

  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
  },

  {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  },

  {
    name: 'Mobile Chrome',
    use: { ...devices['Pixel 5'] },
  },
],
});