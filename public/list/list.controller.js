/**
 * @name: list controller
 * @description: process the logic for the list page
 */

angular.module('parkingEzy')

.controller('ListCtrl',  function (malls, $stateParams, $state) {
    
    var listCtrl = this;
    
    listCtrl.listOfMalls = [];
    listCtrl.selectedDest = $stateParams.dest;
    // console.log(listCtrl.selectedDest.Area);
    // console.log(malls);

    var filter = [];
    var rest = [];
    angular.forEach(malls, function(mall) {
        if (mall.Area == listCtrl.selectedDest.Area){
            filter.push(mall);
        }else{
            rest.push(mall);
        }
    });

    listCtrl.listOfMalls = filter;
    /**
     * @name: selectMall
     * @type: method
     * @description: user selects mall to park at
     */
    listCtrl.selectMall = function (mall) {
        $state.go('map', {carPark: mall});
    };

});