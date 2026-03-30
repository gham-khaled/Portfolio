import { test, expect } from '@playwright/test';

test.describe('Portfolio Visual Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });
  });

  test('no JavaScript errors on page load', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', err => errors.push(err.message));
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    // Scroll through entire page
    await page.evaluate(async () => {
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise(r => setTimeout(r, 1000));
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1000);
    expect(errors).toEqual([]);
  });

  test('full page screenshot', async ({ page }) => {
    test.setTimeout(120000);
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'e2e/screenshots/full-page.png', fullPage: true });
  });

  test('hero section - correct content', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'e2e/screenshots/hero.png' });

    const heroTitle = page.locator('.pres-title');
    await expect(heroTitle).toContainText('Ghamgui Khaled');
    await expect(heroTitle).toContainText('Cloud Engineer');
    await expect(heroTitle).not.toContainText('Junior');
  });

  test('skills section - all images render', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    const skillsSection = page.locator('app-skills');
    await skillsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'e2e/screenshots/skills.png', fullPage: true });

    // Verify ALL skill images have loaded (naturalWidth > 0)
    const skillImages = page.locator('app-skills .skill-image');
    const count = await skillImages.count();
    console.log(`Found ${count} skill images`);

    const brokenImages: string[] = [];
    for (let i = 0; i < count; i++) {
      const img = skillImages.nth(i);
      const src = await img.getAttribute('src');
      const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
      if (naturalWidth === 0) {
        brokenImages.push(src || 'unknown');
      }
    }
    if (brokenImages.length > 0) {
      console.log('BROKEN images:', brokenImages);
    }
    expect(brokenImages).toEqual([]);
  });

  test('navigation scroll works', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(1000);

    const skillsButton = page.locator('.menu button:has-text("SKILLS")');
    await skillsButton.click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'e2e/screenshots/after-skills-click.png' });
    const skillsSection = page.locator('app-skills');
    await expect(skillsSection).toBeInViewport();
  });

  test('project cards display correctly', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    const projectsSection = page.locator('app-projects');
    await projectsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'e2e/screenshots/projects.png' });

    // Verify project images loaded
    const projectImages = page.locator('.project-image');
    const count = await projectImages.count();
    console.log(`Found ${count} project images`);
    expect(count).toBeGreaterThan(0);
  });

  test('project links open in new tab', async ({ page }) => {
    const projectLinks = page.locator('app-project-card a[target="_blank"]');
    const count = await projectLinks.count();
    console.log(`Found ${count} project links with target=_blank`);
    expect(count).toBeGreaterThan(0);

    const linkedInLink = page.locator('a[href*="linkedin"]').first();
    await expect(linkedInLink).toHaveAttribute('target', '_blank');
  });

  test('certifications section', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    const certsSection = page.locator('app-certifications');
    await certsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'e2e/screenshots/certifications.png' });
  });

  test('mobile view', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'e2e/screenshots/mobile.png', fullPage: true });
  });
});
