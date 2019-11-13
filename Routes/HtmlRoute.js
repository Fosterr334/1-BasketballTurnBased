// DEPENDENCIES
var path = require("path");

// Routes

module.exports = function(app) {
  // HTML GET Requests
  app.get("/charSelect", function(req, res) {
    res.sendFile(path.join(__dirname, "../charSelect.html"));
  });

  app.get("/battleScreen", function(req, res) {
    res.sendFile(path.join(__dirname, "../battleScreen.html"));
  });

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
};