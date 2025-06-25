import { test, expect } from '@playwright/test';
 
test.describe('Catalogue produits', () => {
  test.beforeEach(async ({ page }) => {

    await page.goto('http://localhost:5173');
  });
 
  test('Affiche le titre de la page', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Catalogue produits' })).toBeVisible();
  });
 
  test('Affiche 10 produits', async ({ page }) => {
    const items = await page.locator('ul > li');
    await expect(items).toHaveCount(10);
  });
 
  test('Chaque produit affiche un nom et un prix', async ({ page }) => {
    const items = await page.locator('ul > li');
 
    for (let i = 0; i < 10; i++) {
      const text = await items.nth(i).innerText();
      expect(text).toMatch(/.+ — .+€$/);
    }
  });
});
 