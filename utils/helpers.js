const axios = require("axios");
require("dotenv").config();

const news = async (term) => {
  let url = `https://api.polygon.io/v1/meta/symbols/${term}/news?perpage=50&page=1&apiKey=${process.env.API_KEY}`;
  let response = await axios.get(url);
  console.log(response);
  return await response["data"][0];
};

const detail = async (term) => {
  let url = `https://api.polygon.io/v1/meta/symbols/${term}/company?apiKey=${process.env.API_KEY}`;
  let response = await axios.get(url);
  return await response["data"];
};

const search = async (term) => {
  let url = `https://api.polygon.io/v2/reference/tickers?sort=ticker&locale=US&search=${term}&perpage=50&page=1&apiKey=${process.env.API_KEY}`;
  let response = await axios.get(url);
  let tickers = response["data"]["tickers"];
  return await tickers;
};

module.exports = { search, detail, news };
