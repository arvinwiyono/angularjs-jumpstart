(function(){
	angular.module('directiveModule')
		.directive('isolateScopeWithString', function(){
		return {
			scope: {
				name: '@',
				street: '@address'
			},
			template: 'Name: {{name}} Street: {{street}}'
		};
	});
})();