
var yahooFinanceNews = require('yahoo-finance-news');
const redditFetch = require('reddit-fetch');

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

exports.redditdd = (req, res) => {
    redditFetch({
        subreddit: 'wallstreetbets',
        link_flair_text: 'dd',
        sort: 'top',
        allowNSFW: true,
        allowModPost: true,
        allowCrossPost: true,
        allowVideo: true
    
    }).then(post => {
        console.log(post);
        //res.json(post);

    });
};


