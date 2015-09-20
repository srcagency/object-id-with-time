'use strict';

var test = require('tape');
var idFromDate = require('./');

test(function( t ){
	var now = Date.now();

	var a = idFromDate(now).toString();
	var b = idFromDate(now).toString();

	t.notEqual(a, b);
	t.equal(a.substr(0, 8), b.substr(0, 8));
	t.notEqual(a.substr(8), b.substr(8));

	var past = idFromDate(new Date(1991, 8, 30, 12, 30)).toString();
	var current = idFromDate(Date.now()).toString();

	t.notEqual(past.substr(0, 8), current.substr(0, 8));

	t.end();
});
