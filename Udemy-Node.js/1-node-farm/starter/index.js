const fs = require('fs');
const http = require('http');
const url = require('url');
/*
// reading and writing to and from files
const textIn = fs.readFileSync("./txt/input.txt", "utf8");
const textOut = `This is what we know about the avocado: ${textIn}\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!");
*/

const server = http.createServer((req, res) => {
  // let reqInfo = req;
  // console.log(reqInfo);
  // fs.writeFile('./txt/req.txt', `${reqInfo}`, 'utf-8', err => {
  //   if (err) throw err;
  //   console.log('file written');
  // });
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the OVERVIEW page.');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT page.');
  } else if (pathName === '/api') {
    fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
      const productData = JSON.parse(data);
      console.log(productData);
    });
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
  console.log(__dirname);
});
