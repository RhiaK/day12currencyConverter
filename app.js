let endpoint = "convert";
let access_key = "4aa6c8dc93f5e3d4e9afffffd8fc4209";
let from1 = "USD";
let to = $("input.id");
let amount = $("#textbox").val();
let url = 'https://data.fixer.io/api/' + endpoint + '?access_key=' + access_key +'&from=' + from1 + '&to=' + to + '&amount=' + amount;
//on click, it listens then passes to convertCurrency
document.body.addEventListener('click', convertCurrency);
//this calls the prevent default and continues to the rest
	function convertCurrency(event) {
		event.preventDefault();
//get the data from the url that has the converter built in and pass to the if
		$.get(url, function(data) {
//if the type of currency and the target type are the same as the currency type listed on button, continue
  			if ('type' in event.target && event.target.type === 'button') {
//run all that stuff and print out the answer in the textbox
				$("#textbox").val(data);
		}}
	)};
//not sure if I need to assign buttons, not entirely sure exactly what the api does when converting
//I get errors, when trying to use that my subcription does not allow, I am guessing this is the error 
//we kept getting and tried to fix with the https instead of http, possibly the curl thingy?


