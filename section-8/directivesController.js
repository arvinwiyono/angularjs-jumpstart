(function(){
	var app = angular.module('directiveModule', []);

	var customersController = function($scope){
		var counter = 0;
		$scope.tasks = [{title: 'Task 1'}];
		$scope.customer = {
			name: 'Arvin',
			street: '106-116 A\'Beckett Street'
		};

		$scope.customers = [
			{
				name: 'David',
				street: '1234 Anywhere St.',
				age: 25,
				url: 'index.html'
			},
			{
				name: 'Tina',
				street: '212 Weelington Rd.',
				age: 19,
				url: 'index.html'
			},
			{
				name: 'Michelle',
				street: '1800 Crest Court',
				age: 40,
				url: 'index.html'
			},
			{
				name: 'Linus',
				street: '73 Canada Rockies',
				age: 60,
				url: 'index.html'
			}
		];
	};

	customersController.$inject = ['$scope'];

	app.controller('customersController', customersController);

})();