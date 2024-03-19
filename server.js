const http = require("http");

const server = http.createServer((req, res) => {
  res.write(req.url);
  res.end();
});
server.listen(5000, () => {
  console.log("server is running (port 5000)..");
});
