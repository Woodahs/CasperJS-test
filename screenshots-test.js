// screenshots-test.js
// makes screenshots of page http://www.ksymena.com.pl

var casper = require('casper').create();

var views = [
	{
		'name': '320',
		'viewport': { width: 320, height: 600 }
	},
	{
		'name': '480',
		'viewport': { width: 480, height: 600 }
	},
	{
		'name': '640',
		'viewport': { width: 640, height: 600 }
	},
	{
		'name': '768',
		'viewport': { width: 768, height: 800 }
	},
	{
		'name': '980',
		'viewport': { width: 980, height: 800 }
	},
	{
		'name': '1024',
		'viewport': { width: 1024, height: 800 }
	},
	{
		'name': '1200',
		'viewport': { width: 1200, height: 800 }
	},
	{
		'name': '1400',
		'viewport': { width: 1400, height: 800 }
	}
];

casper.start('http://www.ksymena.com.pl', function() {
	this.capture('ksymena.png');
});

casper.run();
