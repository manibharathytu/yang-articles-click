const clickbot = require('./clickbot')
let urls = ['https://www.forbes.com/sites/carolinecenizalevine/2018/01/30/to-advance-in-your-career-is-it-better-to-be-a-specialist-or-generalist/']

waitTime = 1000
async function doJob() {
    while (true) {
        await sleep(waitTime) 
        for (let i=0; i<(urls.length); i++) {
            await clickbot.doJob(urls[i])
        }
    }
}

async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}

doJob()

