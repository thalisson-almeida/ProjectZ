
var jsonPlaceHolderURL = "http://jsonplaceholder.typicode.com/comments";
var jsonPlaceHolderPosts = "http://jsonplaceholder.typicode.com/posts";
var Angular_Interface = {};

Angular_Interface.init = function(){
	
	
	this.app = angular.module("interfaceApp",[]);
	this.app.controller("interfaceController", function($scope, $http){
		$scope.comments = [];
		$scope.currentPage = 1;
		$scope.numPerPage = 5
		$scope.form_recordsPerPage="5";
		$scope.numberPages=0;
		$scope.filterData=[];
		$http.get(jsonPlaceHolderURL).then(function(response){
				Angular_Interface.loadCommentsCallback($scope,response)
		});
		
	});

}


Angular_Interface.loadCommentsCallback = function($scope,response){
	$scope.comments = response.data;
	$scope.filterData=response.data;
	$scope.setPage = function(page){
		$scope.currentPage = page;
	}

	$scope.$watch("filterData.length/numPerPage",function(newValue,oldValue){
		$scope.numberPages = new Array(Math.ceil(newValue));
		$scope.currentPage = 1;
	});
	
	$scope.changeRecordPerPage = function(){
		$scope.numPerPage = parseInt($scope.form_recordsPerPage)

	}
			

	
	
			
}

Angular_Interface.init();

