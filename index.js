'use strict';

var ObjectId = require('mongodb').ObjectId;

module.exports = create;

function create( date ){
	var idWithDate = ObjectId.createFromTime(date/1000).toString();
	var currentId = ObjectId().toString();

    return ObjectId(idWithDate.substr(0, 8)+currentId.substr(8));
}
