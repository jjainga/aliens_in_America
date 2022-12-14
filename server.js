const express = require("express");
const logger = require("morgan");
const mysql = require("mysql2/promise")
const {Sequelize, DataTypes} = require("sequelize");

const cors = require("cors");
const session = require("express-session");
//require('dotenv').config()
const config = require("./config")
const db = require("./models/index")
//console.log(db)
const PORT = process.env.PORT || 4000;

// initialize();


// async function initialize() {
//     // create db if it doesn't already exist
//     const { host, port, user, password, database } = config;
//     //console.log(host + ", " + port + ", " + user + ", " + password + ", " + database)
//     const connection = await mysql.createConnection({ host, port, user, password });
//     await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

//     // connect to db
//     const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

//     // init models and add them to the exported db object
//     db.Aliens(sequelize, DataTypes);
//     db.Details(sequelize, DataTypes);
//     db.Location(sequelize, DataTypes);

//     // sync all models with databases
//     await sequelize.sync();
// }


const app = express();
app.use(cors());

app.use(logger("dev"));

//define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// Session Secret
// app.use(session({
    //   secret: process.env.SESSION_SECRET,
    //   resave: false,
    //   saveUninitialized: true,
    //   cookie: {
        //     maxAge: 2 * 60 * 60 * 1000
        //   }
        // }));
        
        
//bring in routes
const routes = require("./controllers/index")
        //use routes
// Import routes

app.use(routes.aliensRoute);

// ==================================================================

// Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//       // Log (server-side) when our server has started
//       console.log("Server listening on: http://localhost:" + PORT);
//   });
// Start our server so that it can begin listening to client requests.
db.sequelize.sync({force: false}).then(function() {
    app.listen(PORT, function() {
      // Log (server-side) when our server has started
      console.log("Server listening on: http://localhost:" + PORT);
  });
  })
