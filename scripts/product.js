  
var app = angular.module('LydiaSzalon', ['slickCarousel']);



app.controller('Product',function($scope){
	$scope.product = {
		dresses:[
			{category: "A-Line Ruha", name:"Jasmine" , price: 59999, img:["Jasmine001.jpg"]},
			{category: "A-Line Ruha", name:"Lisa" , price: 59999, img:["Lisa001.jpg"]},
			{category: "Mermaid Ruha", name:"Claudia" , price: 59999, img:["Claudia001.jpg"]},
			{category: "Mermaid Ruha", name:"Anne" , price: 59999, img:["Anne001.jpg", "Anne002.jpg", "Anne003.jpg"]},
			{category: "Trumpet Ruha", name:"Renata" , price: 59999, img:["Renata001.jpg"]},
			{category: "Trumpet Ruha", name:"Aida" , price: 59999, img:["Aida001.jpg"]},
		],
		accessories:[
			{category: "Csokor", name:"Csokor - WB17293" , price: 6999, img:["accessories/bouquet1.jpg"]},
			{category: "Csokor", name:"Csokor - WB26392" , price: 6999, img:["accessories/bouquet2.jpg"]},
			{category: "Gyűrűpárna", name:"Gyűrűpárna - RP13529" , price: 7499, img:["accessories/pillow1.jpg"]},
			{category: "Gyűrűpárna", name:"Gyűrűpárna - RP63826" , price: 3499, img:["accessories/pillow2.jpg"]},
			{category: "Hajdísz", name:"Hajdísz - TT10393" , price: 5999, img:["accessories/tiara1.jpg"]},
			{category: "Hajdísz", name:"Hajdísz - TT25961" , price: 5999, img:["accessories/tiara2.jpg"]},
		]
	}

	$scope.category = Common_parseUrlParam();

	function filterProduct(item){
		return item.name == $scope.category.itemId;
	}

	$scope.item = $scope.product[$scope.category.type].filter(filterProduct);
	$scope.item = $scope.item[0];

	$scope.slickConfig={
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		//lazyLoad: 'ondemand',
		responsive: [
		{
			breakpoint: 480, // mobile breakpoint
			settings: {
				slidesToShow: 1
			}
		}
		]	
	  };

	let basketNum = 0;
	$scope.addToBasket = function(){
		basketNum ++;
		$('.basket_num').html(basketNum.toString());
		$('#basket_success').animate({'max-height': '30px'}, 1000, 'swing', function(){
			$('#basket_success').animate({'max-height': '0px'}, 5000)
		})
	}
});