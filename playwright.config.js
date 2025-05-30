// Импортируем defineConfig для автодополнения и валидации
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // Папка с тестами
  testDir: './tests',

  // Таймаут для каждого теста
  timeout: 30 * 1000,

  // Браузеры
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
  ],

  // Показывать браузер в режиме отладки
  use: {
    headless: true, // false — если нужно видеть, что происходит
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
