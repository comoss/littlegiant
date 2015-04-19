 var lgApp = angular.module('lgApp', ["ui.router"])
    lgApp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/home")
      
      $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "index.html"
        })
          
        .state('overhaul', {
            url: "/overhaul",
            templateUrl: "pages/overhaul.html",
          })
          
        .state('ladder2', {
            url: "/ladder2",
            templateUrl: "pages/ladder2.html"
        })
    })
