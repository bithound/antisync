'use strict';

var control = require( './control' );

module.exports = control.series( control.applyEach );
