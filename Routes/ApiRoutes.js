// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendslist = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friendslist);
  });

  // API POST Requests
    app.post("/api/friends", function(req, res) {
      friendslist.push(req.body);
      res.json(true);
  });
};