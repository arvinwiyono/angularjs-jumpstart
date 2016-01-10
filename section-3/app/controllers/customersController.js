// Option 1
// app.controller('CustomersController', function($scope){
// 	// Initializing properties
// 	$scope.reverse = false;
// 	$scope.sortBy = 'name';

// 	$scope.customers = [{joined:'2000-12-02', name:'John', city:'Melbourne', orderTotal:9.9956}, {joined:'2016-01-04', name:'Biondi', city:'Surabaya', orderTotal:14.321}, {joined:'2002-07-21', name:'Arvin', city:'Alaska', orderTotal:1.52}, {joined:'2012-03-09', name:'Yoga', city:'Sydney', orderTotal:200.22}];

// 	$scope.doSort = function(propName){
// 		$scope.sortBy = propName;
// 		$scope.reverse = !$scope.reverse;
// 	};
// });

// Option 2
// (function(){
// 	angular.module('customersApp')
// 	.controller('CustomersController', function($scope){
// 		// Initializing properties
// 		$scope.reverse = false;
// 		$scope.sortBy = 'name';

// 		$scope.customers = [{joined:'2000-12-02', name:'John', city:'Melbourne', orderTotal:9.9956}, {joined:'2016-01-04', name:'Biondi', city:'Surabaya', orderTotal:14.321}, {joined:'2002-07-21', name:'Arvin', city:'Alaska', orderTotal:1.52}, {joined:'2012-03-09', name:'Yoga', city:'Sydney', orderTotal:200.22}];

// 		$scope.doSort = function(propName){
// 			$scope.sortBy = propName;
// 			$scope.reverse = !$scope.reverse;
// 		};
// 	});

// }());

// Option 3
(function(){

	var CustomersController = function($scope){
		// Initializing properties
		$scope.reverse = false;
		$scope.sortBy = 'name';

		$scope.customers = [{joined:'2000-12-02', name:'John', city:'Melbourne', orderTotal:9.9956}, {joined:'2016-01-04', name:'Biondi', city:'Surabaya', orderTotal:14.321}, {joined:'2002-07-21', name:'Arvin', city:'Alaska', orderTotal:1.52}, {joined:'2012-03-09', name:'Yoga', city:'Sydney', orderTotal:200.22}];

		$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};
	};

	CustomersController.$inject = ['$scope'];

	angular.module('customersApp')
		.controller('CustomersController', CustomersController);
}());