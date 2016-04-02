/**
 * @name: map controller
 * @description: process the logic for the map page
 */

angular.module('parkingEzy')

.controller('MapCtrl', function (malls, $stateParams, $state) {
    
    var mapCtrl = this;
    
    mapCtrl.malls = malls;
    mapCtrl.carpark = $stateParams.carPark;
    

    console.log(mapCtrl.carpark);
    /**
     * @name: map
     * @type: variable
     * @description: google map
     */
    try {
        mapCtrl.map = {
            center: {
                latitude: mapCtrl.carpark.Latitude,
                longitude: mapCtrl.carpark.Longitude
            },
            zoom: 16,
            icon: {url: 'assets/img/parking.png'}
        };
        
    } catch(err) {
        $state.go('list');
    };

    mapCtrl.carparkMarkers = [];
    
    angular.forEach(malls, function(mall) {
        
        mapCtrl.carparkMarkers.push({
            id: mall.CarParkID,
            carpark: mall.Development,
            latitude: mall.Latitude,
            longitude: mall.Longitude,
            showMarker: true,
            /*events: {
                click: function(e){
                    var windows = searchCtrl.googlemap.getChildWindows();

                    for (var i = 0; i < windows.length; i++){
                        windows[i].hideWindow();
                    }
                }
            },*/
            control: {}
        });
        
    });
    
    mapCtrl.windowOptions = {
        visible: true
    };
    
    mapCtrl.carparkCoord = {
        latitude: mapCtrl.carpark.Latitude + 0.0001,
        longitude: mapCtrl.carpark.Longitude
    };
    
});