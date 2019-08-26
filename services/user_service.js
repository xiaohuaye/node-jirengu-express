const User = require('../models/mongoose/user.js')
const Subscription = require('../models/mongoose/subScription.js')

module.exports.getAllUsers = async function () {
  return await User.list()
}

module.exports.addNewUser = async function (name, age) {
  return await User.insert({name, age})
}

module.exports.getUserById = async function (userId) {
  return await User.getOneById(userId);
}

module.exports.createSubscription = async function (userId, url) {
  const user = await User.getOneById(userId);
  if(!user) throw Error('No such user!');
  return Subscription.insert(userId,url)

}
