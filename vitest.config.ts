/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import storybookTest from './vitest-plugin/storybook-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: './public',
  plugins: [storybookTest()],
  test: {
    globals: true,
    environment: 'jsdom',
    clearMocks: true,
    include: ['./*.test.ts'],
    browser: {
      enabled: false,
      provider: 'playwright',
      name: 'chromium',
      headless: true,
      screenshotFailures: false,
    },
  },
})
