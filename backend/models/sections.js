const db = require('../helpers/database');

exports.getById = async function getById (id) {
  let query = "SELECT * FROM sections WHERE ID = ?";
  let values = [id];
  let data = await db.run_query(query, values);
  return data;
}

exports.getAll = async function getAll () {
  let query = "SELECT * FROM sections;";
  let data = await db.run_query(query);
  return data;
}