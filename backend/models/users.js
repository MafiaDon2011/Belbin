const db = require('../helpers/database');

exports.getById = async function getById (id) {
  let query = "SELECT * FROM users WHERE ID = ?";
  let values = [id];
  let data = await db.run_query(query, values);
  return data;
}

exports.getByUsername = async function getByUsername(username) {
    const query = "SELECT * FROM users WHERE username = ?;";
    const user = await db.run_query(query, username);
    return user;
  }  

exports.getAll = async function getAll () {
  let query = "SELECT * FROM users;";
  let data = await db.run_query(query);
  return data;
}