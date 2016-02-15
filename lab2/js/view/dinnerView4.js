//ExampleView Object constructor
var DinnerView4 = function (container, model) {

	// Hämta antal gäster
	num = model.getNumberOfGuests();

	// Skicka in måltiden i dishInfo
	var dish = model.getDish(100);
	dishInfo(dish, model);

	$("#totalNumberOfGuests").append('<b>Ingredients for ' + num + ' people</b>');
	$("#totalDishPrice").append('<b>Total: ' + model.getDishPrice(dish.id) + ' kr</b>');
}

var dishInfo = function(dish, model) {
	// Skapa en div för hela rätten, lägg till titel, bild och beskrivning.
	// Hämta ut alla ingredienser med kostnad och lägg i separat div.
	// Hämta total kostnad

	$("#dishImg").append('<img src="images/' + (dish.image) + '"/>');

	var dc = $("#dish");
	var dishContainer = dc.append('<div class="dishSummary"></div>');
	dishContainer.append('<h2>' + dish.name + '</h2>');
	dishContainer.append(dish.description);

	for (var i in dish.ingredients) {
		ingredientList(dish.ingredients[i]);
	}

	
}
 
var ingredientList = function(ingredient, model) {
	var cost = ingredient.price * num;
	var amount = ingredient.quantity * num;

	var ingredientContainer = $("#ingredients").append('<div class="ingredientsSummary"></div>');
	ingredientContainer.append(amount + ' ' + ingredient.unit)
	ingredientContainer.append(' ' + ingredient.name + ' ');
	ingredientContainer.append(cost + ' kr');

}