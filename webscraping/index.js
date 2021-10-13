const fs = require('fs');
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const barcodeId = '8690526095417'
const siteUrl = `https://world.openfoodfacts.org/product/${barcodeId}`


got(siteUrl).then(response => {
  const dom = new JSDOM(response.body);
	const node = dom.window.document.body.querySelector("#main_column > div:nth-child(4) > h1")
	console.log(node.innerHTML);

}).catch(err => {
  console.log(err);
});
