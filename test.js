//This test is to make sure the ip is rotated. 

const clickbot = require('./clickbot')
const parser = require('node-html-parser')

let count = {}

url = 'https://ipinfo.io/ip'
waitTime = 30000

async function pingAndCount(){
    console.log('starting')
 const html=await clickbot.doJob(url)
 const root = parser.parse(html);
 const ip = root.querySelector('body').text
 if (count[ip]) count[ip] = count[ip]+1
 else count[ip] = 1
 console.log(count)
 }

setInterval(pingAndCount, waitTime)