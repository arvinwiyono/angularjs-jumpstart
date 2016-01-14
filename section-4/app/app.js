// Option 1
// var app = angular.module('customersApp', []);

// Option 2 and 3 - using unanonymous function
(function(){
	var app = angular.module('customersApp', ['ngRoute']);
}());