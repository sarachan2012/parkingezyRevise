/**
 * @name: list controller
 * @description: process the logic for the list page
 */

angular.module('parkingEzy')

.controller('ListCtrl',  function (malls, $stateParams, $state, $interval, Malls, $filter) {
    
    var listCtrl = this;
    
    listCtrl.listOfMalls = [];
    listCtrl.selectedDest = $stateParams.dest;
    // console.log(listCtrl.selectedDest.Area);
    // console.log(malls);

    var filter = [];
    var rest = [];
    // var currentTime = new Date();
    // var now_hour = $filter('date')(currentTime, 'HH');
    // var peak_hours_arr = [7,8,12,13,17,18,19,20];
    // console.log(now_hour);
    angular.forEach(malls, function(mall) {
        if (listCtrl.selectedDest.Area != "" && mall.Area == listCtrl.selectedDest.Area){
            // update the waitTime
            // var normal_waiting_hours = Math.floor(Math.random() * 20) + 5; // should be less than 25 mins
            // var peak_waiting_hours= Math.floor(Math.random() * 30) + 30; // More than 30 mins
            // var waitTime = 0;
            // if (peak_hours_arr.indexOf(parseInt(now_hour)) < 0) {
            //     waitTime = normal_waiting_hours;
            // }else{
            //     waitTime = peak_waiting_hours;
            // }
            // if (mall.Lots <= 10){
            //     waitTime = peak_waiting_hours;
            // }
            // Malls.updateMallField(mall.$id, 'WaitTime', waitTime);
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
        var update_lots = mall.Lots - 1;
        Malls.updateMallField(mall.$id, 'Lots', update_lots);
        $state.go('map', {carPark: mall});
    };

});