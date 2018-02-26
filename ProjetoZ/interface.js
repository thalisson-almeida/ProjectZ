
var jsonPlaceHolderURL = "http://jsonplaceholder.typicode.com/comments";

var Angular_Interface = {};

Angular_Interface.init = function(){
	
	this.app = angular.module("interfaceApp",[]);
	this.app.controller("interfaceController", function($scope, $http){
		$scope.comments = [];
		
		$http.get(jsonPlaceHolderURL).then(function(response){
			for(comment in response.data){
				if(!$scope.comments[response.data[comment].postId]){
					$scope.comments[response.data[comment].postId] = [];
				}
				$scope.comments[response.data[comment].postId].push(response.data[comment]);
			}
		})
		
	});

}

Angular_Interface.init();

