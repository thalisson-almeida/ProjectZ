
var jsonPlaceHolderURL = "http://jsonplaceholder.typicode.com/comments";

var Angular_Interface = {};

Angular_Interface.init = function(){
	
	this.app = angular.module("interfaceApp",[]);
	this.app.controller("interfaceController", function($scope, $http){
		
		$http.get(jsonPlaceHolderURL).then(function(response){
			$scope.data = response.data;
		})
		
	});

}

Angular_Interface.init();

