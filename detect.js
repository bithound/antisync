'use strict';

var control = require( './control' );
var detector = require( './detector' );

module.exports = control.parallel( detector );
