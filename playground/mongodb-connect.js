const {MongoClient, ObjectID} = require('mongodb')

var obj = new ObjectID()
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   complete: false
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Unable to inser todo', err)
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // Insert new doc into User (name, age, location)
  db.collection('Users').insertOne({
    name: 'Oscar',
    age: 25,
    location: 'Escuinapa'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err)
    }
    console.log(result.ops[0]._id.getTimestamp())
  })

  db.close()
})
