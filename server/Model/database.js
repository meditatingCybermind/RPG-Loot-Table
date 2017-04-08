// Type 3: Persistent datastore with automatic loading
var Datastore = require('nedb')
  , db = new Datastore({ filename: 'data/database', autoload: true });
// You can issue commands right away

var doc = { hello: 'world'
               , n: 5
               , today: new Date()
               , nedbIsAwesome: true
               , notthere: null
               , notToBeSaved: undefined  // Will not be saved
               , fruits: [ 'apple', 'orange', 'pear' ]
               , infos: { name: 'nedb' }
               };

// db.insert(doc, function (err, newDoc) {   // Callback is optional
//   // newDoc is the newly inserted document, including its _id
//   // newDoc has no key called notToBeSaved since its value was undefined
// });

// Finding all planets in the solar system
db.find({ hello: 'world' }, function (err, docs) {
    console.log(docs);
  // docs is an array containing documents Mars, Earth, Jupiter
  // If no document is found, docs is equal to []
});

module.exports = {db};
