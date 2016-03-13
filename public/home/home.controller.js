/**
 * @name: home controller
 * @description: process the logic for the home page
 */

angular.module('parkingEzy')

.controller('HomeCtrl', function ($state, $firebaseArray, FirebaseUrl) {

    var homeCtrl = this;

    /**
     * @name: beginSearch
     * @description: start searching for carpark availability once user enters search
     */

    homeCtrl.beginSearch = function () {
        $state.go('list');
    }

});