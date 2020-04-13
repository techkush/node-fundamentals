"use strict";
const http = require("http");
const url = require("url");

// Hello Routing
// HTTP Request and Methods
// An interface that allows us to perform the following tasks:
// Create, Read, Update, Delete

// HTTP Methods and Cacheability
// A GET request is cacheable
// POST/PUT/DELETE are not cacheable

// REST - REpresentational State Transfer

// Handling GET Requests

let routes = {
  GET: {
    "/": (req, res) => {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("<h1>Hello Router</h1>");
    },
    "/about": (req, res) => {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("<h1>This is the about page</h1>");
    },
    "/api/getinfo": (req, res) => {
      // fetch data from db and respond as JSON
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(req.queryParams));
    },
  },
  POST: {},
  NA: (req, res) => {
    res.writeHead(404);
    res.end("Content not found!");
  },
};

function router(req, res) {
  // url pass methods
  let baseURI = url.parse(req.url, true);
  //console.log("Requested route : ", baseURI);
  let resolveRoute = routes[req.method][baseURI.pathname];
  if (resolveRoute != undefined) {
    req.queryParams = baseURI.query;
    resolveRoute(req, res);
  } else {
    routes["NA"](req, res);
  }
}

http.createServer(router).listen(3000, () => {
  console.log("Server running on port 3000");
});
