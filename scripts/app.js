 var lgApp = angular.module('lgApp', ["ui.router"])
    lgApp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/home")
      
      $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/home.html"
        })
          
        .state('overhaul', {
            url: "/overhaul",
            templateUrl: "views/overhaul.html",
          })
          
        .state('defender', {
            url: "/defender",
            templateUrl: "views/defender.html"
        })
        .state('contact', {
            url: "/contactus",
            templateUrl: "views/form.html"
        })        
    })
