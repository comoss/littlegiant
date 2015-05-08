 var lgApp = angular.module('lgApp', ["ui.router", "ui.bootstrap"])
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
            controller: 'overhaulCarousel'
          })
          
        .state('defender', {
            url: "/defender",
            templateUrl: "views/defender.html",
            controller: 'defenderCarousel'
        })
        .state('contact', {
            url: "/contact-us",
            templateUrl: "views/form.html"
        })        
    })
