const mongoose = require('mongoose')
const { Schema } = mongoose
const {ObjectId} = Schema.Types;
const SubSchema = new Schema({
  userId: {type: ObjectId, require:true , index: 1},
  url:{String, required: true}
})

const SubModel = mongoose.model('Sub',SubSchema)

async function insert(Sub) {
  return await SubModel.create(Sub)
}

async function list(params) {
  const match = {}
  const flow = SubModel.find(match)
  return await flow.exec()
}

async function getSubByUserId(userId) {
  return await SubModel.find({userId})
}

module.exports = {
  insert,
  list,
  getSubByUserId
}

