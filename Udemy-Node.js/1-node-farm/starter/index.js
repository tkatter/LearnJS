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
  let reqInfo = req;
  console.log(reqInfo);
  // fs.writeFile('./txt/req.txt', `${reqInfo}`, 'utf-8', err => {
  //   if (err) throw err;
  //   console.log('file written');
  // });
  res.end('Hey you ;)');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000...');
});
