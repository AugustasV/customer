# Customer Management CLI

Command line interface for managing customers. Uses: <br />
Mongoose: https://www.npmjs.com/package/mongoose <br />
Commander.js: https://www.npmjs.com/package/commander <br />
Inquirer.js: https://www.npmjs.com/package/inquirer <br />
mocha: https://www.npmjs.com/package/mocha <br />
validator: https://www.npmjs.com/package/validator <br />

### Version
1.0.0

## Usage

### Installation

Install the dependencies

```sh
$ npm install
```

### Create Symlink

```sh
$ npm link
```

### Commands

List Customers (list or l)
```sh
$ node commands.js list
```

Import CSV file to database (need edit import.js file for file source)
```sh
$ node import.js
```

Run mocha unit test
```sh
$ npm run test
```

Add Customer (add or a)
```sh
$ node commands.js add
```

Update Customer (update or u)
```sh
$ node commands.js update [_ID]
```

Remove Customer (remove or r)
```sh
$ node commands.js remove [_ID]
```

## App Info

### Author

Augustas Verbickas(http://augustasv.github.io)

### Version

1.0.0

### License

This project is licensed under the MIT License
