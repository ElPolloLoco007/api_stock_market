const db = require("../models");
const axios = require('axios');
const Stock = db.stock;
const Stock_data = db.stock_data;
const Stock_info = db.stock_info;

const Op = db.Sequelize.Op;

// Create a stock
exports.create = async (req, res) => {
  var fdata;

  // Validate request
  if (!req.body.symbol) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const stock = {
    symbol: req.body.symbol
  };

  // axios.get("https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + stock['symbol'] + "&apikey=3LY7T7I1UGAAI6IE")
  //   .then(data => {
  //     fdata = data['data'];
  //     var pStock;
  //     vStock.create(stock)
  //       .then(createStock => {
  //         console.log("-------",s);
  //         pStock = createStock;

  //         const stock_info = {
  //           name: fdata['Name'],
  //           asset_type: fdata['AssetType'],
  //           description: fdata['Description'],
  //           cik: fdata['CIK'],
  //           exchange: fdata['Exchange'],
  //           currency: fdata['Currency'],
  //           country: fdata['Country'],
  //           sector: fdata['Sector'],
  //           industry: fdata['Industry'],
  //           address: fdata['Address']
  //         };
  //         return Stock_info.create(stock_info);


  //       }).then(si => {
  //         const stock_data = {
  //           fiscal_year_end: fdata['FiscalYearEnd'],
  //           latest_quarter: fdata['LatestQuarter'],
  //           market_capitalization: fdata['MarketCapitalization'],
  //           ebitda: fdata['EBITDA'],
  //           pe_ratio: fdata['PERatio'],
  //           peg_ratio: fdata['PEGRatio'],
  //           book_value: fdata['BookValue'],
  //           dividend_per_share: fdata['DividendPerShare'],
  //           dividend_yield: fdata['DividendYield'],
  //           eps: fdata['EPS'],
  //           revenue_per_share_ttm: fdata['RevenuePerShareTTM'],
  //           profit_margin: fdata['ProfitMargin'],
  //           operating_margin_ttm: fdata['OperatingMarginTTM'],
  //           return_on_assets_ttm: fdata['ReturnOnAssetsTTM'],
  //           return_on_equity_ttm: fdata['ReturnOnEquityTTM'],
  //           revenue_ttm: fdata['RevenueTTM'],
  //           gross_profit_ttm: fdata['GrossProfitTTM'],
  //           diluted_eps_ttm: fdata['DilutedEPSTTM'],
  //           quarterly_earnings_growth_yoy: fdata['QuarterlyEarningsGrowthYOY'],
  //           quarterly_revenue_growth_yoy: fdata['QuarterlyRevenueGrowthYOY'],
  //           analyst_target_price: fdata['AnalystTargetPrice'],
  //           trailing_pe: fdata['TrailingPE'],
  //           foward_pe: fdata['ForwardPE'],
  //           price_to_sales_ratio_ttm: fdata['PriceToSalesRatioTTM'],
  //           price_to_book_ratio: fdata['PriceToBookRatio'],
  //           evto_revenue: fdata['EVToRevenue'],
  //           evto_ebitda: fdata['EVToEBITDA'],
  //           beta: fdata['Beta'],
  //           fiftytwo_week_high: fdata['52WeekHigh'],
  //           fiftytwo_week_low: fdata['52WeekLow'],
  //           fifty_day_moving_average: fdata['50DayMovingAverage'],
  //           twohundred_day_moving_average: fdata['200DayMovingAverage'],
  //           shares_outstanding: fdata['SharesOutstanding'],
  //           shares_float: fdata['SharesFloat'],
  //           shares_short: fdata['SharesShort'],
  //           shares_short_prior_month: fdata['SharesShortPriorMonth'],
  //           short_ratio: fdata['ShortRatio'],
  //           short_percent_outstanding: fdata['ShortPercentOutstanding'],
  //           short_percent_float: fdata['ShortPercentFloat'],
  //           percent_insiders: fdata['PercentInsiders'],
  //           percent_institutions: fdata['PercentInstitutions'],
  //           forward_annual_dividend_rate: fdata['ForwardAnnualDividendRate'],
  //           forward_annual_dividend_yield: fdata['ForwardAnnualDividendYield'],
  //           payout_ratio: fdata['PayoutRatio'],
  //           dividend_date: fdata['DividendDate'],
  //           ex_dividend_date: fdata['ExDividendDate'],
  //           last_split_factor: fdata['LastSplitFactor'],
  //           last_split_date: fdata['LastSplitDate']
  //         };
  //         return Stock_data.create(stock_data);
  //       }).then(si => {
  //         var x = pStock.setStock_data(si);
  //         console.log(x);
  //         pStock.setStock_info(si);

  //         res.send('OK');
  //       })
  //       .catch(err => {
  //         res.status(500).send({
  //           message:
  //             err.message || "Some error occurred while creating the stock."
  //         });
  //       });

  //   })
  //   .catch(error => {
  //     return "error";
  //   })




  axios.get("https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + stock['symbol'] + "&apikey=3LY7T7I1UGAAI6IE")
    .then(async data => {
      fdata = data['data'];
      var s = await Stock.create(stock)

      const stock_info = {
        name: fdata['Name'],
        asset_type: fdata['AssetType'],
        description: fdata['Description'],
        cik: fdata['CIK'],
        exchange: fdata['Exchange'],
        currency: fdata['Currency'],
        country: fdata['Country'],
        sector: fdata['Sector'],
        industry: fdata['Industry'],
        address: fdata['Address'],
        fk_stock_id: s['dataValues']['id']
      };
      await Stock_info.create(stock_info);

      const stock_data = {
        fiscal_year_end: fdata['FiscalYearEnd'],
        latest_quarter: fdata['LatestQuarter'],
        market_capitalization: fdata['MarketCapitalization'],
        ebitda: fdata['EBITDA'],
        pe_ratio: fdata['PERatio'],
        peg_ratio: fdata['PEGRatio'],
        book_value: fdata['BookValue'],
        dividend_per_share: fdata['DividendPerShare'],
        dividend_yield: fdata['DividendYield'],
        eps: fdata['EPS'],
        revenue_per_share_ttm: fdata['RevenuePerShareTTM'],
        profit_margin: fdata['ProfitMargin'],
        operating_margin_ttm: fdata['OperatingMarginTTM'],
        return_on_assets_ttm: fdata['ReturnOnAssetsTTM'],
        return_on_equity_ttm: fdata['ReturnOnEquityTTM'],
        revenue_ttm: fdata['RevenueTTM'],
        gross_profit_ttm: fdata['GrossProfitTTM'],
        diluted_eps_ttm: fdata['DilutedEPSTTM'],
        quarterly_earnings_growth_yoy: fdata['QuarterlyEarningsGrowthYOY'],
        quarterly_revenue_growth_yoy: fdata['QuarterlyRevenueGrowthYOY'],
        analyst_target_price: fdata['AnalystTargetPrice'],
        trailing_pe: fdata['TrailingPE'],
        foward_pe: fdata['ForwardPE'],
        price_to_sales_ratio_ttm: fdata['PriceToSalesRatioTTM'],
        price_to_book_ratio: fdata['PriceToBookRatio'],
        evto_revenue: fdata['EVToRevenue'],
        evto_ebitda: fdata['EVToEBITDA'],
        beta: fdata['Beta'],
        fiftytwo_week_high: fdata['52WeekHigh'],
        fiftytwo_week_low: fdata['52WeekLow'],
        fifty_day_moving_average: fdata['50DayMovingAverage'],
        twohundred_day_moving_average: fdata['200DayMovingAverage'],
        shares_outstanding: fdata['SharesOutstanding'],
        shares_float: fdata['SharesFloat'],
        shares_short: fdata['SharesShort'],
        shares_short_prior_month: fdata['SharesShortPriorMonth'],
        short_ratio: fdata['ShortRatio'],
        short_percent_outstanding: fdata['ShortPercentOutstanding'],
        short_percent_float: fdata['ShortPercentFloat'],
        percent_insiders: fdata['PercentInsiders'],
        percent_institutions: fdata['PercentInstitutions'],
        forward_annual_dividend_rate: fdata['ForwardAnnualDividendRate'],
        forward_annual_dividend_yield: fdata['ForwardAnnualDividendYield'],
        payout_ratio: fdata['PayoutRatio'],
        dividend_date: fdata['DividendDate'],
        ex_dividend_date: fdata['ExDividendDate'],
        last_split_factor: fdata['LastSplitFactor'],
        last_split_date: fdata['LastSplitDate'],
        fk_stock_id: s['dataValues']['id']
      };
      await Stock_data.create(stock_data);
      res.send('OK');
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the stock."
      });
    });
};








// read a stock by id
exports.read = async (req, res) => {

  const id = req.params.id;
  Stock.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// update a stock by id
exports.update = (req, res) => {
  const id = req.params.id;

  Stock.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

//delete a stock by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Stock.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Stock was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Stock with id=${id}. Maybe Stock was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

//find all stocks
exports.findAll = (req, res) => {
  Stock.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.readName = (req, res) => {
  Stock.findAll({ where: { symbol: req.body.symbol } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// axios
//   .post('https://whatever.com/todos', {
//     todo: 'Buy the milk'
//   })
//   .then(res => {
//     console.log(`statusCode: ${res.statusCode}`)
//     console.log(res)
//   })
//   .catch(error => {
//     console.error(error)
//   })