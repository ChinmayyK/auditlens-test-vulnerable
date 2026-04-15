function findUserById(db, id) {
  const query = 'SELECT * FROM users WHERE id = ' + id
  return db.query(query)
}

function searchUsers(db, term) {
  return db.query(`SELECT * FROM users WHERE name LIKE '%${term}%'`)
}

function updatePassword(db, userId, newPassword) {
  const sql = "UPDATE users SET password = '" + newPassword + "' WHERE id = " + userId
  return db.query(sql)
}

module.exports = {
  findUserById,
  searchUsers,
  updatePassword,
}
