import { test, expect } from '@playwright/test';
import { fillForm } from '../utils/form-fill';

test('Fill out new plane form', async ({ page }) => {
  await page.goto('http://localhost:5173/new-plane');

  const id = '123';
  const name = 'your-name';
  const year = '2022';
  const description = 'your-description';
  const rangeInKm = '5000';

  await fillForm(page, id, name, year, description, rangeInKm);

  // wait 5 seconds to see the form filled out
  await page.waitForTimeout(5000);

  // Add assertions here to verify the form submission
});