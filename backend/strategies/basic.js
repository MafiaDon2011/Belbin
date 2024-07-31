const BasicStrategy = require('passport-http').BasicStrategy;
const users = require('../models/users');
const bcrypt = require('bcrypt');


const verifyPassword = async function (user, password) {
  // compare user.password with the password supplied
  console.log(password);
  const match = await bcrypt.compare(password, user.password);
  return match;
}


const checkUserAndPass = async (username, password, done) => {
  // look up the user and check the password if the user exists
  let result;

  try {
    result = await users.getByUsername(username);
  } catch (error) {
    console.error(`Error during authentication for user ${username}`);
    return done(error);
  }

  if (result.length) {
    const user = result[0];
    if (await verifyPassword(user, password)) {
      console.log(`Successfully authenticated user ${username}`);
      return done(null, user);
    } else {
      console.log(`Password incorrect for user ${username}`);
    }
  } else {
    console.log(`No user found with username ${username}`);
  }
  return done(null, false);  // username or password were incorrect
}

const strategy = new BasicStrategy(checkUserAndPass);
module.exports = strategy;
