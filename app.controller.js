// Lab 11

"use strict";


// getter syntax to retrieve the module
angular.module("todoApp", []).controller("TodoController", function ($scope){
	const vm = this;
	
	vm.Todos = [];
	
	vm.add = function(item){
		
		vm.Todos.push({
			todo: item,
			isComplete: false
		});
		
		$scope.newItem = ""
		
	}
	
	vm.delet = function(idx){
		
		vm.Todos.splice(idx, 1);
		
	}
	
	vm.change = function(evt){
		
		console.log(evt.target.textContent);	
		
	}
		
});

