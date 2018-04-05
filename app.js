
let code;

//on click, it listens then passes to the function
$(".btn").on('click', function(){
//the currency code assigned to the button pressed is now called code
	code = $(this).val();
//this gets the data from the API
		$.get("http://data.fixer.io/api/latest?access_key=4aa6c8dc93f5e3d4e9afffffd8fc4209", function(data){
			data.rates[code];
//this looks at the numbers entered in the textbox
			let dollarInput = $("#textbox").val();
//the equations for conversion
			let euroEquivalent = dollarInput / data.rates["USD"];
			let answer = euroEquivalent * data.rates[code];
//appended to the DOM
			$("#output_amount").append("<p> The entered value is the equivalent of " + answer + " in " + code + ". </p.");
		});
});

