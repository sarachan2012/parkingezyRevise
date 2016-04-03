angular.module('parkingEzy')

.controller('LoadCtrl', function ($state, $filter, $interval, $http, malls, Malls) {

    var loadCtrl = this;

    loadCtrl.listOfMalls = malls;
    // console.log(loadCtrl.listOfMalls);
    function updateCarparkAvailability() {
        // possible random number generated is from -5 to 5
        angular.forEach(malls, function(mall){
            var id = mall.$id;
            var curr_lots = mall.Lots;
            var rand_num = Math.floor(Math.random() * 10) - 5;
            var new_lots_num = curr_lots + rand_num;
            if (new_lots_num < 0){
                new_lots_num = 0;
            }else if (new_lots_num == 0){
                new_lots_num = Math.floor((Math.random() * 10) + 1);
            }
            Malls.updateMallField(id, 'Lots', new_lots_num);
        });
    }
    // update every 5 seconds
    $interval(updateCarparkAvailability, 1000 * 5);

});