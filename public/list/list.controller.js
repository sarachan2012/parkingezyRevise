/**
 * @name: list controller
 * @description: process the logic for the list page
 */

angular.module('parkingEzy')

.controller('ListCtrl',  function (malls, $stateParams, $state) {
    
    var listCtrl = this;
    
    listCtrl.listOfMalls = getMallsByArea;
    listCtrl.selectedDest = $stateParams.dest;
    // console.log(listCtrl.selectedDest.Area);
    // console.log(malls);
    console.log(getMallsByArea);

    /**
     * @name: sortMallList
     * @type: method
     * @description: sort the mall list according to Area, waiting time, price
     */
    listCtrl.sortMallList = function(card) {
        return card.values.opt1 + card.values.opt2;
    }
    /**
     * @name: selectMall
     * @type: method
     * @description: user selects mall to park at
     */
    listCtrl.selectMall = function (mall) {
        $state.go('map', {carPark: mall});
    };

});