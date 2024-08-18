import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const url = 'https://www.screener.in/screens/1591170/fast-growing-high-roce-and-low-debt-to-equity/?limit=50&page=1';
const baseURL = 'https://www.screener.in'
fetch(url)
  .then(response => response.text())
  .then(html => {
    const $ = cheerio.load(html);
    const companies = [];
    const links = [];

    $('tr > td > a').each(function() {
      companies.push($(this).text().trim());
      links.push(baseURL+$(this).attr('href'));
    });
    console.log($('tr > td > a').length)

    console.log(companies);
    console.log(links)
  })
  .catch(err => {
    console.error(err);
  });
