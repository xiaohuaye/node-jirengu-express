const mongoose = require('mongoose')
//Promise出现得比mongoose晚
mongoose.Promise = Promise

const uri = "mongodb://localhost:27017/what_i_love";

mongoose.set('useCreateIndex', true)

const connection = mongoose.connect(uri, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('open', () => {
  console.log('db connected');
})
db.on('error', (e) => {
  console.log(e);
})

module.exports = db
