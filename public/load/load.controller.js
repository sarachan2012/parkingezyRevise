angular.module('parkingEzy')

.controller('LoadCtrl', function ($state, $filter, $interval, $http, malls, Malls) {

    var loadCtrl = this;

    loadCtrl.listOfMalls = malls;

    var lambda = new AWS.Lambda({
      region: "us-west-2",
      accessKeyId: '<put access key id>',
      secretAccessKey: '<put secret access key>'
    });
    
    
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

           var avgduration = mall.AverageDuration;
           lambda.invoke({
                  FunctionName: "testlapa",
                  Payload: JSON.stringify({"id": id, 'avgduration': avgduration, 'new_lots_num': new_lots_num })

                }, function(err, data) {
                    if(!err){
                        var result = JSON.parse(data.Payload);
                        console.log(result);
                        Malls.updateMallField(id, 'WaitTime', result.waittime);
                    } else{
                        console.log("err: " + err);
                    }
            });




//            var curr_footfall = mall.Footfall;
//            var rand_num = Math.floor(Math.random() * 10) - 5;
//            var new_footfall_num = curr_footfall + rand_num;
//            if (new_footfall_num < 0 || new_footfall_num == 0){
//                new_footfall_num = Math.floor((Math.random() * 10) + 12);
//            }
            
            // var avgduration = mall.AverageDuration;
//            var randomLeaveDuration = Math.round(avgduration * ((Math.random(0,2) + Math.random(0,2) + Math.random(0,2) + Math.random(0,2) + Math.random(0,2) + Math.random(0,2)) / 6));
//            var cars = (new_footfall_num / 100) * 12;
//            var probabilityOfOneCarLeaving = 1 / cars;
            // var waittime = 0;
            // var inverseLots = 1;
            // if (new_lots_num > 0){
            //     inverseLots = 1 / new_lots_num;
            // }
//            var waittime = Math.round(avgduration * probabilityOfOneCarLeaving);
           // if (new_lots_num < 0 || new_lots_num == 0){
            // waittime = Math.round(avgduration * inverseLots);
           // }
            
            
            // Malls.updateMallField(id, 'WaitTime', waittime);
//            Malls.updateMallField(id, 'Footfall', new_footfall_num);
        });
    }
    // update every 5 seconds
    // $interval(updateCarparkAvailability, 1000 * 5);
    updateCarparkAvailability();
});