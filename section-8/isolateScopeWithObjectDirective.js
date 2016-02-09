(function(){
	angular.module('directiveModule')
		.directive('isolateScopeWithObject', function(){
			return {
				restrict: 'E',
				scope: {
					datasource: '=',
					foo: '='
				},
				template: 'Name: {{datasource.name}} Street: {{datasource.street}}' +
						  '<br/><button ng-click="datasource.name=\'Fred\'">Change</button>'
			};
		});
})();