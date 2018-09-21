//const mocha = require('mocha');
const assert = require ('assert');
const customer = require ('../models/customer');
//Description
describe('Need to save record to database',function(){
  //create test
  it('Save a record to database',function(done){
    var char = new Customer ({
      firstname: 'Augustas'
    });
    char.save().then(function(){
assert(char.isNew === false);
done();
    });

  });
  
});