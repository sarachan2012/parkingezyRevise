/**
 * @name: getMall service
 * @description: single responsibility of returning a firebase array of malls
 */

angular.module('parkingEzy')

.factory('Malls', function ($firebaseArray, $firebaseObject, FirebaseUrl) {

    var mallRef = new Firebase(FirebaseUrl + 'malls');

    return {
        getMalls: function () {
            return new $firebaseArray(mallRef);
        },
        
        getMall: function (mallId) {
            return $firebaseArray(mallRef.child(mallId));
        },

        updateMallField: function(mallId, fieldName, value){
            return mallRef.child(mallId).child(fieldName).set(value);
        }
    };

});