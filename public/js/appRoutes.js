angular.module('appRoutes', []).config(function($routeProvider,$locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/views/view.html',
      controller: 'ViewController'
    })

    .when('/add', {
      templateUrl: '/views/add.html',
      controller: 'AddController'
    });

  $locationProvider.html5Mode(true);

});
