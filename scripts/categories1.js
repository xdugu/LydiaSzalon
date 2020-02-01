  
var app = angular.module('LydiaSzalon', []);



app.controller('Category1',function($scope){
	var product = {
		dresses:[
			{category: "A-Line Ruha", name:"Jasmine" , price: 59999, img:"Jasmine001.jpg"},
			{category: "A-Line Ruha", name:"Lisa" , price: 59999, img:"Lisa001.jpg"},
			{category: "Mermaid Ruha", name:"Anne" , price: 59999, img:"Anne001.jpg"},
			{category: "Mermaid Ruha", name:"Claudia" , price: 59999, img:"Claudia001.jpg"},
			{category: "Trumpet Ruha", name:"Renata" , price: 59999, img:"Renata001.jpg"},
			{category: "Trumpet Ruha", name:"Aida" , price: 59999, img:"Aida001.jpg"},
		]
	}
});