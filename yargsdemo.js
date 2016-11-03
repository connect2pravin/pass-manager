var argv = require('yargs').argv;

console.log(argv)

var command = argv._[0];

console.log(command);

var secondArg = argv._[1];
console.log(secondArg);

if(command == 'hello' && typeof argv.name !== 'undefined' && typeof argv.surname !== 'undefined'){
	console.log('Hello ' + argv.name + " " + argv.surname);
}else if(command == 'hello' && typeof argv.name !== 'undefined'){
	console.log('Hello ' + argv.name);
}
else if(command == 'hello'){
	console.log('Hello World !');
}