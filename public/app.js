/**
 * @name: parkingEzy
 * @description: main module of the application
 */

angular.module('parkingEzy', [
    'firebase',
    'ui.router'
  ])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as homeCtrl',
                templateUrl: 'home/home.html'
            })
            .state('list', {
                url: '/list',
                templateUrl: 'list/list.html'
            });

        $urlRouterProvider.otherwise('/');

    })

    .constant('FirebaseUrl', 'https://parkingezy.firebaseio.com/');