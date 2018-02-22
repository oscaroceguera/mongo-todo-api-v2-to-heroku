const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a5d951bb24e084ce4ab2740')
  // }, {
  //   $set: {
  //     complete: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(result => {
  //   console.log(result)
  // })
  
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a655a6363b0860a276bab41')
  }, {
    $set: {
      name: 'Goku'
    },
    $inc: {
      age: 7
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result)
  })


  // db.close()
})
