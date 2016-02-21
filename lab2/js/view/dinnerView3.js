var DinnerView3 = function (container,model,type,filter) {

	var allDishes = model.getAllDishes(type, filter);

	for (var i = 0; i < allDishes.length; i++) {
		dishInfo(allDishes[i]);
	}
}

var dishInfo = function(dish, model) {

	var dishImg = ('<img src="images/' + (dish.image) + '"/>');
	var dishName = ('<h4>' + dish.name + '</h4>');
	var dishDesc = ("<p>" + dish.description.slice(0,85) + "..."+"</p>");

	$(".right-content").append('<div class="dish col-md-4">' + dishImg + dishName + dishDesc + '</div>')
}