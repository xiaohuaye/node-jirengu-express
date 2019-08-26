
const Schema = mongoose.Schema;
//Schema中定义id使用
const ObjectId = Schema.Types.ObjectId
// Object = mongoose.Type.ObjectId 自己生成一个id
//构造器
const UserSchema = new Schema({
  //unique 指定name为唯一索引，也就是说在此表中没有办法插入name的数据 （联合索引是and条件）;index表示正序还是逆序
  name: {type: String, require: true, unique: true, index: 1},
  age: {type: Number, max: 188, min: 0}
})
//user自动变为复数
const UserModel = mongoose.model('users.ejs', UserSchema);

(async () => {
  const u = await UserModel.create({
    name:'laoyang',
    age: 20
  })
  return u
})()
    .then(r => {
      console.log(r);
    })
    .catch(e => {
      console.log(e);
    })


