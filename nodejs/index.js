const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {


  // build file path
  let filePath = path.join(
  __dirname,
  "public",
  req.url === "/" ? "index.html" : req.url
  );

  // extension of file
  let extname = path.extname(filePath);

  // initial content type
  let contentType = "text/html";
  
  // Check file type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
  }


  if (contentType == "text/html" && extname == "") filePath += ".html";

  // log the filePath
  console.log(filePath);

  // read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // page not found

        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf8");

          }
        );

      } else {
        // server had an error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // was successful
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});
// Choose the port
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
