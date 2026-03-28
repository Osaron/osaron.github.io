const { test, expect } = require('@playwright/test');

test.describe('Portfolio Interaction Tests', () => {

  test('Basic document rendering and verification', async ({ page }) => {
    // Go to our local statically served site
    await page.goto('/');

    // Check for specific text to ensure DOM is alive
    const heroName = page.locator('.hero-name');
    await expect(heroName).toHaveText('Oscar');
  });

  test('Interactive Medusae particle canvas exists', async ({ page }) => {
    await page.goto('/');

    // Assert the background canvas engine spawned
    const canvas = page.locator('#bg-canvas');
    await expect(canvas).toBeVisible();
  });

  test('Dark mode toggle behavior', async ({ page }) => {
    await page.goto('/');

    const body = page.locator('body');
    const toggleBtn = page.locator('.toggle-mode');

    // Start in light mode (no dark-mode class by default locally usually, but we check explicitly)
    const initialHasDarkMode = await body.evaluate(el => el.classList.contains('dark-mode'));

    // Click toggle
    await toggleBtn.click();

    if (initialHasDarkMode) {
      // Verify class was removed
      await expect(body).not.toHaveClass(/dark-mode/);
    } else {
      // Verify class was added
      await expect(body).toHaveClass(/dark-mode/);
    }
  });

});
