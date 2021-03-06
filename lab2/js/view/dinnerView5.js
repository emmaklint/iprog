//ExampleView Object constructor
var DinnerView5 = function (container, model) {

	var menu = model.getFullMenu();

	// Get number of guests and send to HTML
	var num = model.getNumberOfGuests();
	$("#numberOfGuests").html('My dinner: ' + num + ' people');
	$(".backButton").html('<button type="button" class="backButton">Go back and edit dinner</button>')

	// Send every dinner-object into dinnerCost-method 
	// which gets all the relevant info about the objects.
	for (var i in menu) {
		dinnerCost(menu[i], model);
		}

	// Gets the menus total cost and send to HTML
	$("#totalCost").append('<p>Total: ' + model.getTotalMenuPrice() + ' kr</p>')
}
 
var dinnerCost = function(dish, model) {
	// Sends dish to a method which calculate the
	// cost for the dish
	var cost = model.getDishPrice(dish.id);

	// Creates a div which contains the objects name, image and total cost
	var dishImg = ('<img src="images/' + (dish.image) + '"/>');
	var dishName = ('<h2>' + dish.name + '</h2>');
	var dishCost = ('<p class="cost">' + cost + " kr</p>");

	$("#costSummary").append('<div class="dish col-md-4">' + dishImg + '<div id="dishText">' + dishName + dishCost + '</div></div>');
}