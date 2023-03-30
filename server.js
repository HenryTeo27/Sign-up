const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
  if (request.url === "/") { // 如果访问的是根目录
    const filePath = path.join(__dirname, "homepage.html");
    const contentType = "text/html";
    serveStaticFile(response, filePath, contentType);
  } else if (request.url === "/style.css") { // 如果访问的是样式表
    const filePath = path.join(__dirname, "style.css");
    const contentType = "text/css";
    serveStaticFile(response, filePath, contentType);
  } else if (request.url === "/login.html") { // 如果访问的是登录页面
    const filePath = path.join(__dirname, "login.html");
    const contentType = "text/html";
    serveStaticFile(response, filePath, contentType);
  } else if (request.url === "/register.html") { // 如果访问的是注册页面
    const filePath = path.join(__dirname, "register.html");
    const contentType = "text/html";
    serveStaticFile(response, filePath, contentType);
  } else if (request.url === "/") { // 如果访问的是根目录
    const filePath = path.join(__dirname, "homepage.html");
    const contentType = "text/html";
    serveStaticFile(response, filePath, contentType);
  } else { // 如果请求的文件不存在
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("404 Not Found");
  }
});

function serveStaticFile(response, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("Internal Server Error");
    } else {
      response.writeHead(200, { "Content-Type": contentType });
      response.end(data);
    }
  });
}
