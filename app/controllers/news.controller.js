const keysConfig = require("../config/keys.config.js");


var yahooFinanceNews = require('yahoo-finance-news');
var axios = require("axios");

exports.yahoo = (req, res) => {
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    //gme,apps...
    var stocks = req.params.id;
    yahooFinanceNews.get(stocks, function (data) {
        res.json(JSON.parse(data));
    });
};

exports.fearandgreedindex = (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://stock-market-data.p.rapidapi.com/buzz/fear-and-greed-index',
        headers: {
            'x-rapidapi-host': 'stock-market-data.p.rapidapi.com',
            'x-rapidapi-key': keysConfig.RAPIDAPI
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.error(error);
    });
};

exports.wsbmentions = (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://stock-market-data.p.rapidapi.com/stock/valuation/valuation-measures',
        params: { ticker_symbol: 'SAVA' },
        headers: {
            'x-rapidapi-host': 'stock-market-data.p.rapidapi.com',
            'x-rapidapi-key': keysConfig.RAPIDAPI
        }
    };
    axios.request(options).then(function (response) {
        console.log(response.data);
        res.send(response.data);

    }).catch(function (error) {
        console.error(error);
    });
};


