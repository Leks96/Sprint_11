"use strict"

fetch("project4.json")
	.then(function(response) {
		return response.json(); 
		})
	.then(function(data) {
		console.log(data);
		});

