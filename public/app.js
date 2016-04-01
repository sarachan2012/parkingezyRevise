/**
 * @name: parkingEzy
 * @description: main module of the application
 */

angular.module('parkingEzy', [
    'firebase',
    'ui.router',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'google.places'
  ])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as homeCtrl',
                templateUrl: 'home/home.html',
                resolve: {
                    malls: function (Malls) {
                        return Malls.getMalls().$loaded();
                    }
                }
            })
            .state('list', {
                url: '/list',
                controller: 'ListCtrl as listCtrl',
                templateUrl: 'list/list.html',
                resolve: {
                    malls: function (Malls) {
                        return Malls.getMalls().$loaded();
                    }
                }
            })
            .state('map', {
                url: '/map',
                controller: 'MapCtrl as mapCtrl',
                templateUrl: 'map/map.html',
                params: {carPark: null},
                resolve: {
                    malls: function (Malls) {
                        return Malls.getMalls().$loaded();
                    }
                }
            });

        $urlRouterProvider.otherwise('/');

    })

    .config(function (uiGmapGoogleMapApiProvider) {

        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyCaXBV3pnvGrnkQKrpOXSXboD6iuyb0_Qk',
            v: '3.20',
            libraries: 'weather,geometry,visualization'
        });

    })

    .constant('FirebaseUrl', 'https://parkingezy.firebaseio.com/');