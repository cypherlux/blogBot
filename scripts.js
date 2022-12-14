const puppeteer = require('puppeteer')

//idk what this does exactly
const fs = require ('fs/promises')


//opens up browser, opens new page in browser, goes to specific URL
async function start() {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto(""); //change this URL to change the page to scrape
 
    //creates an array of all elements with "THISELEMENT" in a new txt document
    const names = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("")).map(x => x.textContent)
    })
    await fs.writeFile("names.txt", names.join("\r\n")) //creates a new file w/ a certain name

    await browser.close ();
}

start()
