console.log('Starting password manager');

var storage = require('node-persist')

storage.initSync();

storage.setItemSync('accounts',[{
		username: 'Pravin',
		balance: 100},
		{
		username: 'Tushar',
		balance: 100
		}
		
		]);
		
var accounts = storage.getItemSync('accounts');

console.log(accounts)

accounts.push({
		username: 'Saurabh',
		balance: 100
		});

storage.setItemSync('accounts', accounts);