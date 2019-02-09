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
		
	}
	
	vm.delet = function(idx){
		
		vm.Todos.splice(idx, 1);
		
	}
	
	vm.change = function(chg, idx){
		
		vm.Todos[idx].todo = chg;
		
	}
	
	/* 	vm.Todos.push({
			todo: "feed fish",
			isComplete: false
		});
		vm.Todos.push({
			todo: "water plants",
			isComplete: false			
		});
		vm.Todos.push({
			todo: "clean bong",
			isComplete: false			
		});
		vm.Todos.push({
			todo: "drink beer",
			isComplete: false
		});
		vm.Todos.push({
			todo: "wash dishes",
			isComplete: false
		}); */
		
});

