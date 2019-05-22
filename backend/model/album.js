const actions = {
  fetchAllData: (mysql, params) => new Promise((resolve, reject) => {
    mysql.query("SELECT * FROM `demo_album`", params, (error, rows) => {
      if (error) {
        reject(error)
      }
      resolve(rows)
    })
  })
}

module.exports = actions