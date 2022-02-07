var mysql = require('mysql');
var migration = require('mysql-migrations');

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const connection = mysql.createPool(config);

migration.init(connection, __dirname + '/migrations');