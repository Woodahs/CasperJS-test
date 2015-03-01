// cli-test.js
var casper = require('casper').create();

if (casper.cli.args.length < 1) {
	casper.echo("No argument passed, please type 'casperjs cli-test.js arguments'");
} else {
	casper.echo("Your arguments:");
	for (var i = 0; i < casper.cli.args.length; i++) {
		casper.echo('arg[' + i + ']: ' +casper.cli.args[i]);
	}
}
