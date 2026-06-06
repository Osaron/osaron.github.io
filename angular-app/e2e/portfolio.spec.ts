import { test, expect } from '@playwright/test';

test.describe('Portfolio', () => {

  test('home page renders hero with name', async ({ page }) => {
    await page.goto('/');
    const heroName = page.locator('.hero h1 .accent');
    await expect(heroName).toHaveText('Oscar R.');
  });

  test('particle background canvas is present', async ({ page }) => {
    await page.goto('/');
    const canvas = page.locator('app-particle-background canvas');
    await expect(canvas).toBeAttached();
  });

  test('dark mode toggle adds and removes dark-mode class', async ({ page }) => {
    await page.goto('/');
    const body = page.locator('body');
    const toggle = page.getByTestId('dark-mode-toggle');

    const initialDark = await body.evaluate(el => el.classList.contains('dark-mode'));
    await toggle.click();

    if (initialDark) {
      await expect(body).not.toHaveClass(/dark-mode/);
    } else {
      await expect(body).toHaveClass(/dark-mode/);
    }

    // Toggle back — restores original state
    await toggle.click();
    if (initialDark) {
      await expect(body).toHaveClass(/dark-mode/);
    } else {
      await expect(body).not.toHaveClass(/dark-mode/);
    }
  });

  test('navigation to About page works', async ({ page }) => {
    await page.goto('/');
    await page.click('text=About');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h2').first()).toBeVisible();
  });

  test('navigation to Blogs page works', async ({ page }) => {
    await page.goto('/projects/blogs');
    await expect(page.locator('.blog-hero h1')).toBeVisible();
  });

  test('API Docs loads the 3-column layout', async ({ page }) => {
    await page.goto('/api-docs');
    await expect(page.locator('.left-sidebar')).toBeVisible();
    await expect(page.locator('.main-content')).toBeVisible();
    await expect(page.locator('.right-sidebar')).toBeVisible();
  });

});
