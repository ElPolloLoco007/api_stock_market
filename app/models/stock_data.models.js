module.exports = (sequelize, Sequelize) => {
  const stock_data = sequelize.define("stock_data", {
    fiscal_year_end: {
      type: Sequelize.STRING
    },
    latest_quarter: {
      type: Sequelize.DATE
    },
    market_capitalization: {
      type: Sequelize.BIGINT
    },
    ebitda: {
      type: Sequelize.BIGINT
    },
    pe_ratio: {
      type: Sequelize.FLOAT
    },
    peg_ratio: {
      type: Sequelize.FLOAT
    },
    book_value: {
      type: Sequelize.FLOAT
    },
    dividend_per_share: {
      type: Sequelize.FLOAT
    },
    dividend_yield: {
      type: Sequelize.FLOAT
    },
    eps: {
      type: Sequelize.FLOAT
    },
    revenue_per_share_ttm: {
      type: Sequelize.FLOAT
    },
    profit_margin: {
      type: Sequelize.FLOAT
    },
    operating_margin_ttm: {
      type: Sequelize.FLOAT
    },
    return_on_assets_ttm: {
      type: Sequelize.FLOAT
    },
    return_on_equity_ttm: {
      type: Sequelize.FLOAT
    },
    revenue_ttm: {
      type: Sequelize.BIGINT
    },
    gross_profit_ttm: {
      type: Sequelize.BIGINT
    },
    diluted_eps_ttm: {
      type: Sequelize.FLOAT
    },
    quarterly_earnings_growth_yoy: {
      type: Sequelize.FLOAT
    },
    quarterly_revenue_growth_yoy: {
      type: Sequelize.FLOAT
    },
    analyst_target_price: {
      type: Sequelize.FLOAT
    },
    trailing_pe: {
      type: Sequelize.FLOAT
    },
    foward_pe: {
      type: Sequelize.FLOAT
    },
    price_to_sales_ratio_ttm: {
      type: Sequelize.FLOAT
    },
    price_to_book_ratio: {
      type: Sequelize.FLOAT
    },
    evto_revenue: {
      type: Sequelize.FLOAT
    },
    evto_ebitda: {
      type: Sequelize.FLOAT
    },
    beta: {
      type: Sequelize.FLOAT
    },
    fiftytwo_week_high: {
      type: Sequelize.FLOAT
    },
    fiftytwo_week_low: {
      type: Sequelize.FLOAT
    },
    fifty_day_moving_average: {
      type: Sequelize.FLOAT
    },
    twohundred_day_moving_average: {
      type: Sequelize.FLOAT
    },
    shares_outstanding: {
      type: Sequelize.BIGINT
    },
    shares_float: {
      type: Sequelize.BIGINT
    },
    shares_short: {
      type: Sequelize.BIGINT
    },
    shares_short_prior_month: {
      type: Sequelize.BIGINT
    },
    short_ratio: {
      type: Sequelize.FLOAT
    },
    short_percent_outstanding: {
      type: Sequelize.FLOAT
    },
    short_percent_float: {
      type: Sequelize.FLOAT
    },
    percent_insiders: {
      type: Sequelize.FLOAT
    },
    percent_institutions: {
      type: Sequelize.FLOAT
    },
    forward_annual_dividend_rate: {
      type: Sequelize.FLOAT
    },
    forward_annual_dividend_yield: {
      type: Sequelize.FLOAT
    },
    payout_ratio: {
      type: Sequelize.FLOAT
    },
    dividend_date: {
      type: Sequelize.STRING
    },
    ex_dividend_date: {
      type: Sequelize.STRING
    },
    last_split_factor: {
      type: Sequelize.STRING
    },
    last_split_date: {
      type: Sequelize.STRING
    }
  });

  return stock_data;
};