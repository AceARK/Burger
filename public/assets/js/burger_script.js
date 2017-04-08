$(document).ready(function(){
	var burgerSrcArray = ["/assets/img/baconMcDburger.png", "/assets/img/bbqBaconBurger.png", "/assets/img/chickenSandwich.png", "/assets/img/doubleBurger.png", "/assets/img/doubleCheeseDoubleBurgerbacon.png", "/assets/img/friedChickenSandwich.png"];
	var wrapperSrcArray = ["/assets/img/wrapper1.png", "/assets/img/wrapper2.png"];
	var usedBurgerSrcArray = [];

	// Get current timezone offset for host device
	var clientDate = new Date();
	var currentTimeZoneOffsetInHours = clientDate.getTimezoneOffset() / 60;
	console.log(currentTimeZoneOffsetInHours);

	$(".devouredOrderedDate").each(function(item) {
		var time = item.val();
		console.log(time);
		var timeFormattedToTimeZone = moment(time).subtract(currentTimeZoneOffsetInHours);
		item.val(timeFormattedToTimeZone);
		console.log(timeFormattedToTimeZone);
	});

	// Random burger pic for each new burger
	$(".readyToDevour").each(function(item) {
		var randomBurgerSrcIndex = Math.floor(Math.random()*burgerSrcArray.length);
		while(usedBurgerSrcArray.indexOf(randomBurgerSrcIndex) != -1) {
			randomBurgerSrcIndex = Math.floor(Math.random()*burgerSrcArray.length);
		}
		usedBurgerSrcArray.push(randomBurgerSrcIndex);
		// Setting custom burger pic for each burger
		$(this).find(".burgerPic").attr("src", burgerSrcArray[randomBurgerSrcIndex]);
	});

	// Wrapper pic for each devoured burger
	$(".alreadyDevoured").each(function(item) {
		var randomWrapperSrcIndex = Math.floor(Math.random()*wrapperSrcArray.length);
		
		// Setting custom wrapper pic for each devoured burger
		$(this).find(".wrapperPic").attr("src", wrapperSrcArray[randomWrapperSrcIndex]);
	});

});

