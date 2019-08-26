const mongoose = require('mongoose')
const { Schema } = mongoose
const UserSchema = new Schema({
  name: { type: String, require:true , index: 1},
  age:{ type: Number, min:0, mix: 120}
})

const UserModel = mongoose.model('users',UserSchema)

async function insert(user) {
  return await UserModel.create(user)
}

async function getOneById(id) {
  return await UserModel.findOne({ _id: id})
}

async function getOneByName(name) {
  return await UserModel.findOne({name})
}

async function list(params) {
  const match = {}
  const flow = UserModel.find(match)
  return await flow.exec()
}

module.exports = {
  insert,
  getOneById,
  getOneByName,
  list
}
