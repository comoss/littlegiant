var lgApp = angular.module('lgApp');

lgApp.directive('formLink', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/header.html'
	};
});