var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bballplayer_DB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id "+ connection.threadId + "\n");
    newPlayer();
    //removePlayer();
    //displayRoster();
})

let newPlayer = () => {
  console.log("Added new player...\n");
  var query = connection.query(
      "INSERT INTO players SET ?",
      {
        p_id : 1,
        player_name : "Luca Doncic",
        player_img : "./assets/images/images/Doncic.jpg",
        offense : 1,
        defense : 1,
        support : 1
      },
      function(err,res){
        if (err) throw err;
        console.log(res.affectedRows + " player has been added...\n");
        updateRoster();
      }
  );
  console.log(query.sql)
}

let updateRoster = () => {
  console.log("Updating Roster...\n");
  let query = connection.query(
    "UPDATE players SET ? WHERE ?",
    [
      {
        offense : 2,
        defense : 3
      },
      {
        player_name : "Luca Doncic"
      }
    ],
    function(err,res){
      if (err) throw err;
      console.log(res.affectedRows + " Roster updated!\n")
      displayRoster();
    }
  );
  console.log(query.sql);
}

let displayRoster = () => {
  console.log("Pulling up new roster...\n");
  connection.query("SELECT * FROM players", function(err, res){
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

let removePlayer = () => {
  console.log("Deleting player off roster")
  connection.query(
    "DELETE FROM players WHERE ?",
    {
      id : 10
    },
    function(err, res){
      if (err) throw err;
      console.log(res.affectedRows + " players removed\n");
      displayRoster();
    }
  );
  //console.log(query.sql);
}