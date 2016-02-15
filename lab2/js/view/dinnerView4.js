//ExampleView Object constructor
var DinnerView4 = function (container, model) {

	// Get number of guests
	guests = model.getNumberOfGuests();

	// Sends the dish into dishInfo-method 
	// which gets all the relevant info about the object.
	// --> The id-number should removed in lab 3 <--
	dishInfo(model.getDish(100), model);

	// Sends number of guests and dishprice to HTML
	$("#totalNumberOfGuests").append('<b>Ingredients for ' + guests + ' people</b>');
	$("#totalDishPrice").append('<b>Total: ' + model.getDishPrice(dish.id) + ' kr</b>');
}

var dishInfo = function(dish, model) {
	// Send the dishimage to HTML	
	$("#dishImg").append('<img src="images/' + (dish.image) + '"/>');
	
	// Creates a div which contains the objects name and description
	var dc = $("#dish");
	var dishContainer = dc.append('<div class="dishSummary"></div>');
	dishContainer.append('<h2>' + dish.name + '</h2>');
	dishContainer.append(dish.description);

	// Looks through every ingredient in an object
	// and sends it to the ingredientList-method
	for (var i in dish.ingredients) {
		ingredientList(dish.ingredients[i]);
	}
}
 
var ingredientList = function(ingredient, model) {
	// Get the ingredients cost and amount from methods in model
	var cost = ingredient.price * guests;
	var amount = ingredient.quantity * guests;

	// Creates a div which contains the ingredients name, amount, unit and cost.
	var ingredientContainer = $("#ingredients").append('<div class="ingredientsSummary"></div>');
	ingredientContainer.append(amount + ' ' + ingredient.unit)
	ingredientContainer.append(' ' + ingredient.name + ' ');
	ingredientContainer.append(cost + ' kr');

}