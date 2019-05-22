const mysqlClient = require("mysql");

const connectMysql = mysqlClient => {
  const mysqlConnect = mysqlClient.createConnection({
    host     : '52.52.212.227',
    user     : 'admin',
    password : 'admin',
    database : 'demo',
    port: 33090
  });
  mysqlConnect.connect();
  console.log("Success!");
  return mysqlConnect;
}

let mysqldb = connectMysql(mysqlClient);


function mysql () {
  return (req, res, next) => {
    if (!req.mysql) {
      req.mysql = mysqldb
    }
    return next();
  }
}

module.exports = mysql;