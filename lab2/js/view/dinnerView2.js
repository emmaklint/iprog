var DinnerView2 = function (container,model) {

	this.numberOfGuests = container.find("#numberOfGuests");

	this.numberOfGuests.html(model.getNumberOfGuests());



}
