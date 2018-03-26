const puppeteer = require('puppeteer');
const baseURL = "http:/localhost:8080/#/";

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  page.setViewport({
    width: 1920,
    height: 1080
  })
  await page.goto(baseURL + 'subjects/3D', {
    waitUntil: "networkidle0"
  });

  await page.waitFor(3000);
  
  await page.click("#selectItems");
  await page.click("#Cursul_2");

  await page.waitFor(1000);

  await page.screenshot({path: 'example.png'});

  await browser.close();
})();