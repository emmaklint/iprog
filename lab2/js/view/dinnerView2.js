var DinnerView2 = function (container,model) {

	$("#number").append('<input type="number" min="1" value="' + model.getNumberOfGuests() + '"></input>')

	$("#table").append('<tr><th>Dishname</th><th>Cost</th></tr>');
	$("#totalPrice").append('<p>Total: ' + model.getTotalMenuPrice() + ' kr</p>');

	var menu = model.getFullMenu();

for (var i = 0; i < menu.length; i++) {
	costInfo(menu[i],model);
	}
}

var costInfo = function(dish, model) {
	var cost = model.getDishPrice(dish.id);

	var dishName = ('<td width="30%">' + dish.name + '</td>')
	var dishCost = ('<td width="30%">' + cost + ' kr' + '</td>')

	$("#table").append('<tr>' + dishName + dishCost + '</tr>')
}