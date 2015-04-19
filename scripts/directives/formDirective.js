var lgApp = angular.module('lgApp')

lgApp.directive('formLink', function(){
	return{
		restrict: 'AE',
		template: 'views/form.html'
	};
});
