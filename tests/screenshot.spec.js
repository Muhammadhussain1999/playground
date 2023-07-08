const { test, expect } = require("@playwright/test");
test("Macthing picture", async ({page})=>{
    page.on('request',req=>console.log(`>> : ${req.method} ${req.resourceType} ${req.url}`))
    await page.goto("https://www.etsy.com/")
    await page.click("text=Accept")
    await page.fill("input","jeans")
    await page.keyboard.press('Enter')
    
   
    //expect(await page.screenshot()).toMatchSnapshot('Screenshot_1.png')
})