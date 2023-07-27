const fetch = require('node-fetch');
// import fetch from 'node-fetch';

async function fetchgoogleapi() {
    const res = await fetch('https://www.google.com/')
    console.log(res);
}

fetchgoogleapi();