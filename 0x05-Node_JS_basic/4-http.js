const http = require('http');
const host = '127.0.0.1';
const app = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello Holberton School!');
});
app.listen(1245, host, () => {
});

module.axports = app;
