var DinnerView2 = function (container,model) {

	this.numberOfGuests = container.find("#numberOfGuests");
	this.price = container.find("#dinnerCost");

	this.numberOfGuests.html(model.getNumberOfGuests());
	this.price.html(model.getTotalMenuPrice());


}
