module.exports = {
    "up": "CREATE TABLE people (id INT NOT NULL AUTO_INCREMENT, name TEXT, PRIMARY KEY(id))",
    "down": "DROP TABLE people"
}