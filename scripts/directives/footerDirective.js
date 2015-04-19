var lgApp = angular.module('lgApp');

lgApp.directive('theFooter', function(){
	return{
		restrict: 'AE',
		template: 'views/footer.html'
	};
});