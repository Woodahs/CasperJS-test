// run as "casperjs test hello-test.js"
casper.test.begin("Hello, Test!", 1, function(test) {
  test.assert(true);
  test.done();
});