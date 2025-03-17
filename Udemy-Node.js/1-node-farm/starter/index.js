// Core modules
const fs = require('fs');
const http = require('http');
const url = require('url');
// 3rd party
const slugify = require('slugify');
// Our modules
const replaceTemplate = require('./modules/replaceTemplate');

/*
// reading and writing to and from files
const textIn = fs.readFileSync("./txt/input.txt", "utf8");
const textOut = `This is what we know about the avocado: ${textIn}\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!");
*/

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/TEMPLATE-overview.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/TEMPLATE-product.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/TEMPLATE-card.html`,
  'utf-8'
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// const slugs = dataObj.map(el =>
//   slugify(el.productName, {
//     replacement: '-',
//     lower: true,
//     trim: true,
//   })
// );

// for (let i = 0; i < dataObj.length; i++) {
//   dataObj[i].slug = slugs[i];
// }

// console.log(dataObj);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  console.log(url.parse(req.url, true));
  // console.log(pathname);
  // Overview Page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);

    // Product page
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

    // API page
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(`${data}`);

    // 404 not found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world!',
    });
    res.end('<h1>404 Page not found.</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000...');
});
