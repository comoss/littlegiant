 var lgApp = angular.module('lgApp', ["ui.router"])
    lgApp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/home")
      
      $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "home.html"
        })
        .state('overhaul', {
            url: "/overhaul",
            templateUrl: "views/overhaul.html",
          })
        .state('ladder2', {
            url: "/ladder2",
            templateUrl: "views/ladder2.html"
        })
    })
