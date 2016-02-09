(function(){
	angular.module('directiveModule')
		.directive('isolateScope', function(){
			return {
				scope: {},
				template: 'Name: {{customer.name}} Street: {{customer.street}}'
			};
		});
})();