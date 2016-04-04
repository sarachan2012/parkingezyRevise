// dependencies
var Firebase = require('firebase');
var FirebaseUrl = "https://finalparkingezy.firebaseio.com/";
var mallRef = new Firebase(FirebaseUrl);

var async = require('async');
var AWS = require('aws-sdk');
var util = require('util');

exports.handler = function(event, context) {

    function updateMallField(mallId, fieldName, value){
        return mallRef.child(mallId).child(fieldName).set(value);
    }
    var id = event.id;
    var avgduration = event.avgduration;

    var waittime = 0;
    var inverseLots = 1;

    if (new_lots_num > 0){
        inverseLots = 1 / new_lots_num;
    }

    waittime = Math.round(avgduration * inverseLots);

    // return to the results to the application
   context.succeed({'id' : id, 'waittime': waittime});
};