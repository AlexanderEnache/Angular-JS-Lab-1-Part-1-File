// Lab 11

"use strict";


// getter syntax to retrieve the module
angular.module("todoApp", []).controller("TodoController", function ($scope){
	const vm = this;
	
	vm.Todos = [];
	
	vm.add = function(item){
		
		if(item == "")
			return;
		
		vm.Todos.push({
			todo: item,
			isComplete: false
		});
		
		$scope.newItem = "";
		
	}
	
	vm.delet = function(idx){
		
		vm.Todos.splice(idx, 1);
		vm.Todos[idx].isComplete = true;
		
	}
	
	vm.change = function(idx, evt){
		
		vm.Todos[idx].todo = evt.target.innerText;
		
	}
	
	vm.triggerAdd = function(e){
		
		if(e.keyCode == '13'){
			
			vm.add($scope.newItem);
			
		}
		
	}
		
});

