var casper = require('casper').create();

casper.start('http://casper.org/', function() {
	this.echo(this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
	this.echo(this.getTitle());
});

casper.run;
