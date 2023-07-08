// @ts-check
const { devices } = require('@playwright/test');
const config ={
testMatch:['tests/UIBasicstest.spec.js'],
timeout: 30*1000,
expect:{

  timeout:5000
},

screenshot: 'on',
use:{
  browserName:'chromium',
  headless:false,
  slowMo:5000,
  trace:'on'
}
}
module.exports =config
