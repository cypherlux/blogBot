//this is based off of "https://www.youtube.com/watch?v=lgyszZhAZOI&t=1859s&ab_channel=LearnWebCode"
// There are also ways to download photos, click buttons, and submit forms.


//pulls in puppeteer package
const puppeteer = require('puppeteer')

//idk what this does exactly
const fs = require ('fs/promises')


//opens up browser, opens new page in browser, goes to specific URL
async function start() {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto("https://zenhabits.net/archives/"); //change this URL to change the page that I scrape
 
    //creates an array of all elements with ".post-title" in a new txt document
    const names = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".post-title")).map(x => x.textContent)
    })
    await fs.writeFile("names.txt", names.join("\r\n")) //creates a new file w/ a certain name

    await browser.close ();
}

start()
