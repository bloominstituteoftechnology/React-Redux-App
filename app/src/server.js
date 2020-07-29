const cors = require('cors');
const axios = require('axios');
const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

app.use('/proxy', proxy('https://www.metaweather.com'));

app.listen(3001, () => {
    console.log('Server running on 3001');
});

app.get("/weather", cors(), (req, res, next) => {
    axios({
        url: 'https://www.metaweather.com/api/location/44418/',
        method: 'get',
        headers: { 'Access-Control-Allow-Origin': '*'}
    })
    .then(resp => {
        console.log('getting data...');
        res.json(resp.data);
    })
    .catch(err => {
        console.log('error! ', err);
        res.json(err);
    });
});