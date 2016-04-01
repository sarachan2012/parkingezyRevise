/**
 * @name: getMall service
 * @description: single responsibility of returning a firebase array of malls
 */

angular.module('parkingEzy')

.factory('Malls', function ($firebaseArray, $firebaseObject, FirebaseUrl) {

    var mallRef = new Firebase(FirebaseUrl + '0');

    return {
        getMalls: function () {
            return new $firebaseArray(mallRef);
        },
        
        getMall: function (mallId) {
            return $firebaseArray(mallRef.child(mallId));
        }
    };

});