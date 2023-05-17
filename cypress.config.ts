import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'mvnf87',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },
})
