angular.module('lgApp', [])
.directive('formDirective', function(){
	return{
		restrict: 'E'
		template: 'views/form.html'
	}
});
