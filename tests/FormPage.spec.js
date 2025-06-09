import {expect, test} from '@playwright/test'

test.describe('Testing Form Page', () => {
    test('test Practice Form', async ({page}) => {
        await page.goto('/automation-practice-form')

        await page.getByRole('textbox', { name: 'First Name' }).fill('Alexander')
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Averin')
        await page.getByRole('textbox', { name: 'name@example.com' }).fill('avergunol@yandex.ru')
        await page.getByText('Male', { exact: true }).click();
        await page.getByRole('textbox', { name: 'Mobile Number' }).fill('1234567890')
        await page.locator('#dateOfBirthInput').fill('5 april 2004')
        await page.locator('.subjects-auto-complete__value-container').fill('QA auto testing right now')
        await page.getByText('Music').click()

    })
})
