const mysql = require('nodejs-mysql').default;

const config = {
    host: "localhost",
    port: "3307",
    user: "root",
    password: "",
    database: "employee_db"
}

const db = mysql.getInstance(config)

db.connect()
    .then(function() {
        console.log("Connected!");
        var sql = "INSERT INTO employee_TB (name, email, password, phone) VALUES ('hasti', 'hasti@gmail.com','hasti123','96352741')";
        return db.exec(sql);
    }).then(function(res) {
        console.log(res);
        return db.exec("SELECT * FROM employee_TB");
    }).then(function(result) {
        for (var i in result) {
            console.log('user: ', result[i].name + " " + result[i].email + " " + result[i].password + " " + result[i].phone);
        }
        process.exit(0);
    }).catch(function(err) {
        console.log("Error");
        process.exit(0);
    })