export async function fillForm(
  page: any,
  id: string,
  name: string,
  year: string,
  description: string,
  rangeInKm: string
): Promise<void> {
  await page.fill('#id', id);
  await page.fill('#name', name);
  await page.fill('#year', year);
  await page.fill('#description', description);
  await page.fill('#rangeInKm', rangeInKm);
}