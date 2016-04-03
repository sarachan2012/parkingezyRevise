/**
 * @name: home controller
 * @description: process the logic for the home page
 */

angular.module('parkingEzy')

.controller('HomeCtrl', function ($state, $filter, $interval, $http, malls, Malls) {

    var homeCtrl = this;

    homeCtrl.listOfMalls = malls;
    // console.log(homeCtrl.listOfMalls);
    /**
     * @name: customTime, currentTime, hour, minute
     * @type: variable
     * @description: provides the current date time
     */

    homeCtrl.customTime = false;

    $interval(function () {
        if (!homeCtrl.customTime) {
            homeCtrl.currentTime = new Date();
            homeCtrl.hour = $filter('date')(homeCtrl.currentTime, 'HH');
            homeCtrl.minute = $filter('date')(homeCtrl.currentTime, 'mm');
        }
    }, 1000);

    // function updateCarparkAvailability() {
    //     // possible random number generated is from -5 to 5
    //     angular.forEach(malls, function(mall){
    //         var id = mall.$id;
    //         var curr_lots = mall.Lots;
    //         var rand_num = Math.floor(Math.random() * 10) - 5;
    //         var new_lots_num = curr_lots + rand_num;
    //         if (new_lots_num < 0){
    //             new_lots_num = 0;
    //         }else if (new_lots_num == 0){
    //             new_lots_num = Math.floor((Math.random() * 10) + 1);
    //         }
    //         Malls.updateMallField(id, 'Lots', new_lots_num);
    //     });
    // }
    // // update every 5 seconds
    // $interval(updateCarparkAvailability, 1000 * 5);
    /**
     * @name: listOfHours, listOfMinutes
     * @type: variable
     * @description: provides the list of hours
     */

    homeCtrl.listOfHours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];

    homeCtrl.listOfMinutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
    /**
     * @name: beginSearch
     * @type: method
     * @description: start searching for carpark availability once user enters search
     */

    // homeCtrl.beginSearch = function (isValid) {
    //     if (isValid) {
    //         $state.go('list');
    //     }
    // }
    
    // homeCtrl.setSelectedMall = function(site){
    //     homeCtrl.selectedDestination = site.$id;
    // };
    homeCtrl.beginSearch = function () {
        // console.log(homeCtrl.selectedDestination);
        // $state.go('list', {destination: homeCtrl.selectedDestination});
        $state.go('list', {dest: homeCtrl.selectedDestination});
    };

    /*var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { "address": "Brussels" }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
                var location = results[0].geometry.location,
                    lat      = location.lat(),
                    lng      = location.lng();
              alert("Latitude: " + lat);
              alert("Longitude: " + lng);
            }
    });*/

    /*$http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=44.4647452,7.3553838&sensor=true', function(response) {
        
        console.log(response);
    });*/

});