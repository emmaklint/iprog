$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views

	// var exampleView = new ExampleView($("#exampleView"),model);
	//vardinnerView1=new DinnerView1($(".container"),model)
	var dinnerView2 = new DinnerView2($("#left-column"),model);
	var dinnerView3 = new DinnerView3($("#right-column"),model);
	//var dinnerView4 = new DinnerView4($("container"), model);
	// var dinnerView4 = new DinnerView4($("container"), model);
	// var dinnerView5 = new DinnerView5($("container"), model);
	//var dinnerView6 = new DinnerView6($("container"), model);


});