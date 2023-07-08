// @ts-check
const { test, expect, chromium } = require("@playwright/test");
test("Browser Playwright test", async () => {
const browser = await chromium.launch({
    headless:false
  })
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com");
  console.log(await page.title())
});
test("Page Playwright test", async ({page}) => {
  const userName= page.locator('#username')
  const signIn=page.locator('#signInBtn')
  const cardTitiles=page.locator(".card-body a")
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title())
  await page.locator('#username').type("rahulshetty")
  await page.locator("[type='password']").type("learning")
  await page.locator('#signInBtn').click()
  console.log(await page.locator('[style*=" block"]').textContent())
  await expect(page.locator('[style*=" block"]')).toContainText('Incorrect')
  await userName.fill("")
  await userName.fill("rahulshettyacademy")
  await Promise.all([
    page.waitForNavigation(),
    signIn.click(),
  ])
  
  // console.log(await cardTitiles.first().textContent())
  // console.log(await   cardTitiles.nth(1).textContent())
  const allTitiles= await cardTitiles.allTextContents()
  console.log(allTitiles)
});

test('Register to Rahul Shetty Academy Website',async ({page})=>{
  await page.goto("https://rahulshettyacademy.com/client")
  await page.locator(".text-reset").click()
  await page.locator("#firstName").type("Mansoor")
  await page.locator("#lastName").type("Nasir")
  await page.locator("#userEmail").type("Mansoor009@gmail.com")
  await page.locator("#userMobile").type("Mansoor")
  const occupation= page.locator(".custom-select")
  await occupation.selectOption("3: Engineer")
  await page.check('[value="Male"]')
  await page.locator("#userPassword").type("Admin@123")
  await page.locator("#userMobile").type("Admin@123")
  await page.locator('[value="Register"]').click()


  



})
test("Macthing picture", async ({page})=>{
  await page.goto("https://www.google.com/")
  expect(await page.screenshot()).toMatchSnapshot('Screenshot_1.png')
})
test('Fullservice',async ({page})=>{
  await page.goto("http://s.designfiles.co/")
  await page.getByRole('link', { name: 'SIGN-IN' }).click();
  await page.getByPlaceholder('Email').fill('admin@df.co');;
  await page.getByPlaceholder('Password').fill('dffullservice');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('div:nth-child(2) > .designer-projects__link').click();
  await page.getByRole('link', { name: 'POs' }).click();
  await page.getByRole('link', { name: 'Create Purchase Order' }).click();
  await page.locator('#purchase_order_purchase_order_vendor_id').selectOption('17');
  await page.getByRole('link', { name: 'Add Manual Line Item' }).click();
  await page.getByRole('link', { name: 'Add Manual Line Item' }).click();
  await page.getByRole('link', { name: 'Add Manual Line Item' }).click();
  await page.getByRole('link', { name: 'Save Draft', exact: true }).click();
  await page.getByRole('link', { name: 'TRACKER', exact: true }).click();
  await page.locator('#dp1682920040228').click();
  await page.getByRole('link', { name: '10', exact: true }).click();
  await page.locator('#dp1682920040229').click();
  await page.getByRole('link', { name: '18' }).click();
  await page.locator('#dp1682920040230').click();
  await page.getByRole('link', { name: '18' }).click();
  await page.locator('#dp1682920040231').click();
  await page.getByRole('link', { name: '10', exact: true }).click();
  await page.locator('#dp1682920040231').click();
  await page.locator('#ui-datepicker-div label').click();
  await page.getByRole('link', { name: 'Yes, Apply Date' }).click();
})
test('UI Controls',async({page})=>{
  await page.goto("https://rahulshettyacademy.com/loginpagePractise")
  const userName= page.locator('#username')
  const SignIn= page.locator('#signInBtn')
  const documentLink=page.locator("[href*='documents-request']")
  const dropdwon=page.locator('select.form-control')
  await dropdwon.selectOption("consult")
  await page.locator('.radiotextsty').last().click()
  await page.locator("#okayBtn").click();
  await expect(page.locator('.radiotextsty').last()).toBeChecked()
  await page.locator('#terms').click()
  expect(page.locator('#terms')).toBeChecked()
  await page.locator('#terms').uncheck()
console.log(await page.locator('#terms').isChecked())
expect(await page.locator("#terms").isChecked()).toBeFalsy()
await expect(documentLink).toHaveAttribute('class','blinkingText')

// await page.pause()

})
test.only('child windows hadl',async({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName= page.locator('#username')
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  const documentLink=page.locator("[href*='documents-request']");
  const [newPage]=await Promise.all([ 
  context.waitForEvent('page'),
  documentLink.click(),
])
const text = await newPage.locator("p.im-para.red").textContent();
const arrayText=text.split("@")
const domain=arrayText[1].split(" ")[0]
console.log(domain)
await userName.type(domain)
console.log(await userName.textContent())
await page.pause()
})