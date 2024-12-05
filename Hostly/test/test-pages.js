var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://34.65.143.36/:4200' , function(error, response, body) {
        done();
    });
});