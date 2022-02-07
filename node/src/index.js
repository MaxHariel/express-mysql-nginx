const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const connection = mysql.createConnection(config);

connection.connect();

connection.query("INSERT INTO people (name) VALUES('Max')")

app.get("/", async (req, res) => {
  try {
    connection.query("SELECT * FROM people", function (error, results, fields) {
      if (!error) {
        let ul = "<ul>";
        results.map(p => {
          ul += `<li>${p.name}</li>`;
        });
        ul += "</ul>";
  
        return res.send(`
          <h1>Full Cycle Rocks!</h1>
          ${ul}
        `);
      } else {
        console.log(error)
        return res.send ("Error ao buscar os dados")
      }
    });
  } catch (error) {
    console.log(error)
    return res.send("Erro não aplicação tente mais tarde")
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
