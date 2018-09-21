  var mongoose = require('mongoose');
  // Map global promise - get rid of warning
  mongoose.Promise = global.Promise;
  // Connect to db
  var db = mongoose.connect('mongodb://test:testing1@ds235732.mlab.com:35732/clientdb', {
    useMongoClient: true
  });
  
  // Import model
  const Customer = require('./models/customer');
  
  // Add Customer
  const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
      console.info('New Customer Added');
      db.close();
    });
  }

  // Update Customer
  const updateCustomer = (_id, customer) => {
    Customer.update({ _id }, customer)
      .then(customer => {
        console.info('Customer Updated');
        db.close();
      });
  }
  
  // Remove Customer
  const removeCustomer = (_id) => {
    Customer.remove({ _id })
      .then(customer => {
        console.info('Customer Removed');
        db.close();
      });
  }
  
  
  // Export All Methods
  module.exports = {
    addCustomer,
    updateCustomer,
    removeCustomer
  }