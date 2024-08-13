import type { Plugin } from 'vitest/config'

export const storybookTest = (): Plugin => {
  console.log('1️⃣ Invoking storybookTest plugin function!')
  return {
    name: 'vite-plugin-storybook-test',
    enforce: 'pre',
    async config(config) {
      console.log('2️⃣ Mutating vitest config!')
      config.test ??= {}

      config.test.env ??= {}
      config.test.env = {
        ...config.test.env,
        // To be accessed by the setup file
        __STORYBOOK_URL__: 'http://localhost:6006',
      }

      config.resolve ??= {}
      config.resolve.conditions ??= []
      config.resolve.conditions.push('storybook', 'stories', 'test')

      config.test.setupFiles ??= []
      if (typeof config.test.setupFiles === 'string') {
        config.test.setupFiles = [config.test.setupFiles]
      }
      config.test.setupFiles.push('./vitest-plugin/setup-file.ts')

      config.test.globalSetup = config.test.globalSetup ?? []
      if (typeof config.test.globalSetup === 'string') {
        config.test.globalSetup = [config.test.globalSetup]
      }
      config.test.globalSetup.push('./vitest-plugin/global-setup.ts')

      return config
    },
    async transform(code) {
      return code
    },
  }
}

export default storybookTest
