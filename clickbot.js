const puppeteer = require('puppeteer')

async function doJob(url) {
    try {
        const browser = await puppeteer.launch({
            headless: false,
            args: ['--proxy-server=zproxy.lum-superproxy.io:22225']
        });
        const page = await browser.newPage();

        await page.authenticate({ username: 'lum-customer-hl_68daf293-zone-static', password: 'qnrar7uaznjf' });
        console.log(url)
        await page.goto(url,  {
            // networkIdleTimeout: 5000,
            // waitUntil: 'networkidle',
            timeout: 3000000
        })
        // const html = await page.content()
        await browser.close()
        // return html
        console.log("done")
    }
    catch (e) {
        console.log("Exception occured:" + e)
    }
}




exports.doJob = doJob