const { test, expect } = require('@playwright/test');

test('TodoMVC загружается и содержит правильный заголовок', async ({ page }) => {
  //переход на сайт
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  //проверка заголовка страницы
  await expect(page).toHaveTitle(/TodoMVC/);
});

test('Добавление новых задач в список', async ({ page }) => {
  //Переходим на страницу
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  //Находим поле для ввода новой задачи
  const todoInput = page.getByPlaceholder('What needs to be done?');

  //Вводим три задачи и нажимаем Enter после каждой
  const tasks = ['Купить молоко', 'Выбросить мусор', 'Позвонить маме'];
  for (const task of tasks) {
    await todoInput.fill(task); //Ввод текста
    await todoInput.press('Enter'); //Отправка задачи
  }

  //Проверяем, что список задач содержит 3 элемента
  const todoItems = page.locator('.todo-list li');
  await expect(todoItems).toHaveCount(3);
});
