  var util = require('util');
  var mongoose = require('mongoose');
  mongoose.Promise = global.Promise;
  var promise = mongoose.connect('mongodb://test:testing1@ds235732.mlab.com:35732/clientdb', {
    useMongoClient: true,
    /* other options */
  });
  var fs = require('fs');
  var lineList = fs.readFileSync('C:/Users/Augustas/Downloads/test.csv').toString().split('\n');
  lineList.shift(); // Shift the headings off the list of records.
  
  var schemaKeyList = ['Name', 'Class', 'Dorm', 'Room', 'GPA'];
  
  var RepOppSchema = new mongoose.Schema({
      Name: String,
      Class: String,
      Dorm: String,
      Room: Number,
      GPA: Number
  });
  var RepOppDoc = mongoose.model('RepOpp', RepOppSchema);
  
  function queryAllEntries () {
      RepOppDoc.aggregate(
          {$group: {_id: '$Name', oppArray: {$push: {
              Class: '$Class', 
              Dorm: '$Dorm',
              Room: '$Room',
              GPA: '$GPA'
              }}
          }}, function(err, qDocList) {
          console.log(util.inspect(qDocList, false, 10));
          process.exit(0);
      });
  }
  
  // Recursively go through list adding documents.
  // (This will overload the stack when lots of entries
  // are inserted.  In practice I make heavy use the NodeJS 
  // "async" module to avoid such situations.)
  function createDocRecurse (err) {
      if (err) {
          console.log(err);
          process.exit(1);
      }
      if (lineList.length) {
          var line = lineList.shift();
          var doc = new RepOppDoc();
          line.split(',').forEach(function (entry, i) {
              doc[schemaKeyList[i]] = entry;
          });
          doc.save(createDocRecurse);
      } else {
          // After the last entry query to show the result.
          queryAllEntries();
      }
  }
  
  createDocRecurse(null);