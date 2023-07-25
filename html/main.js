const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    const html = fs.readFileSync('index.html');
    response.writeHeader(200, {"content-Type":"text/html"});
    response.write(html);
    response.end();
});

server.listen(8080, () => {
    console.log('servidor escuchando en http://localhost:' + 8080);
});