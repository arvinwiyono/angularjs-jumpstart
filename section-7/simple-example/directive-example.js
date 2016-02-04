var app = angular.module('moduleName', []);

app.directive('myDirective', function(){
	return {
		restrict: 'EA',
		scope: {},
		template: '<div>{{ myVal }}</div>',
		controller: controller,
		link: function(scope, element, attrs){}
	}
});