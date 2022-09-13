/////////////// Instalando e configurando Cypress ////////////

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    screenshotOnRunFailure: true,
    video: false,
    videoUploadOnPasses: false
  },
});
