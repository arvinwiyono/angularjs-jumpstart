(function(){
	angular.module('directiveModule')
		.directive('sharedScope', function(){
			return {
				template: 'Name: {{customer.name}} Street: {{customer.street}}'
			};
		});
})();