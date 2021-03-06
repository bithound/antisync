'use strict';

var antisync = {
    eachSeries: require( './eachseries' )
};

// reduce only has a series version, as doing reduce in parallel won't
// work in many situations.
module.exports = function reduce( arr, memo, iterator, callback ) {
    antisync.eachSeries( arr, function( x, callback ) {
        iterator( memo, x, function( err, v ) {
            memo = v;
            callback( err );
        } );
    }, function( err ) {
        callback( err, memo );
    } );
};