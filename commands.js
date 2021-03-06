#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
  addCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
} = require('./index');

// Customer Questions
const questions = [
  {
    type: 'input',
    name: 'firstname',
    message: 'Customer First Name'
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Customer Last Name'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Customer Email Adress'
  },
  {
    type: 'input',
    name: 'phonenumber1',
    message: 'Customer First Phone Number'
  },
  {
    type: 'input',
    name: 'phonenumber2',
    message: 'Customer Second Phone Number'
  },
  {
    type: 'input',
    name: 'comment',
    message: 'Customer Comment'
  }
];

program 
  .version('1.0.0')
  .description('Customer managment')

// program
//   .command('add <firstname> <lastname> <phone> <email>')
//   .alias('a')
//   .description('Add a customer')
//   .action((firstname, lastname, phone, email) => {
//     addCustomer({firstname, lastname, phone, email});
//   });

// Add Command
program
  .command('add')
  .alias('a')
  .description('Add a customer')
  .action(() => {
    prompt(questions).then(answers => addCustomer(answers));
  });


// Update Command
program
  .command('update <_id>')
  .alias('u')
  .description('Update a customer')
  .action(_id => {
    prompt(questions).then(answers => updateCustomer(_id, answers));
  });

// Remove Command
program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a customer')
  .action(_id => removeCustomer(_id));

// List Command
program
  .command('list')
  .alias('l')
  .description('List all customers')
  .action(() => listCustomers());

program.parse(process.argv);