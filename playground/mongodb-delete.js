const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // DeleteMany
  // db.collection('Todos').deleteMany({ text: 'asdddddd' })
  //   .then(result => {
  //     console.log(result)
  //   })

  // DeleteOne
  // db.collection('Todos')
  //   .deleteOne({text: 'A que onda'})
  //   .then(result => {
  //     console.log(result)
  //   })

  // findOneAndDelete
  // db.collection('Todos')
  //   .findOneAndDelete({ complete: true })
  //   .then(result => {
  //     console.log(result)
  //   })

  // db.collection('Users').deleteMany({name: 'Oscar'})

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5a655a6363b0860a276bab40")
  }).then(results => {
    console.log(JSON.stringify(results, undefined, 2))
  })

  //db.close()
})
