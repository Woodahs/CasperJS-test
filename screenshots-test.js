// screenshots-test.js
// makes screenshots of page http://www.ksymena.com.pl

var casper = require('casper').create();

var viewports = [{
    'name': '320',
    'viewport': {
        width: 320,
        height: 600
    }
}, {
    'name': '480',
    'viewport': {
        width: 480,
        height: 600
    }
}, {
    'name': '640',
    'viewport': {
        width: 640,
        height: 600
    }
}, {
    'name': '768',
    'viewport': {
        width: 768,
        height: 800
    }
}, {
    'name': '980',
    'viewport': {
        width: 980,
        height: 800
    }
}, {
    'name': '1024',
    'viewport': {
        width: 1024,
        height: 800
    }
}, {
    'name': '1200',
    'viewport': {
        width: 1200,
        height: 800
    }
}, {
    'name': '1400',
    'viewport': {
        width: 1400,
        height: 800
    }
}];

if (casper.cli.args.length < 1) {
    casper.echo("Usage example: 'casperjs screenshots-test.js http://ksymena.com.pl'").exit(1);
} else {
    screenshotUrl = casper.cli.args[0];
}

casper.start();

casper.each(viewports, function(casper, viewport) {
    this.then(function() {
        this.viewport(viewport.viewport.width, viewport.viewport.height);
    });

    this.thenOpen(screenshotUrl, function() {
        this.wait(1000);
    });

    this.then(function() {
        this.echo('Processing: ' + viewport.name + ' (' + viewport.viewport.width + 'x' + viewport.viewport.height + ')', 'info');
        this.capture('screenshots/' + viewport.name + '-' + viewport.viewport.width + 'x' + viewport.viewport.height + '.png', {
            top: 0,
            left: 0,
            width: viewport.viewport.width,
            height: viewport.viewport.height
        });
    });
});

casper.then(function() {
	this.echo("Processing done!");
});

casper.run();
