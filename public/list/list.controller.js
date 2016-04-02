/**
 * @name: list controller
 * @description: process the logic for the list page
 */

angular.module('parkingEzy')

.controller('ListCtrl', function ($state, malls) {
    
    var listCtrl = this;
    
    listCtrl.listOfMalls = malls;
    console.log(malls);

    /**
     * @name: selectMall
     * @type: method
     * @description: user selects mall to park at
     */

    listCtrl.selectMall = function (mall) {
        $state.go('map', {carPark: mall});
    };

});