const db = require('../helpers/database');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

exports.add = async function add (user) {
    user.password = await bcrypt.hash(user.password, saltRounds);
    splitPass = user.password.split('$');
    user.passwordSalt = splitPass[3].substring(0, 22);
    console.log(user);
    let query = "INSERT INTO users SET ?";
    let data = await db.run_query(query, user);
    return data;
  }