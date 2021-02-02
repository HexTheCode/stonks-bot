import { configs } from '../../../../configs.ts';

export const news = async (term: string) => {
  let url = `https://api.polygon.io/v1/meta/symbols/${term}/news?perpage=50&page=1&apiKey=${configs.apiKey}`;
  let response = await fetch(url);
  let tickers = await response.json();
  return await tickers[0];
};

export const detail = async (term: string) => {
  let url = `https://api.polygon.io/v1/meta/symbols/${term}/company?apiKey=${configs.apiKey}`;
  let response = await fetch(url);
  let tickers = await response.json();
  return await tickers;
};

export const search = async (term: string) => {
  let url = `https://api.polygon.io/v2/reference/tickers?sort=ticker&locale=US&search=${term}&perpage=50&page=1&apiKey=${configs.apiKey}`;
  let response = await fetch(url);
  let tickers = await response.json();
  return await tickers["tickers"];
};