var lgApp = angular.module('lgApp');

lgApp.directive('theFooter', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/footer.html'
	};

});