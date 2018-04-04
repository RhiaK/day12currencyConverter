
$.ajax({
	url: 'http://data.fixer.io/api/convert?access_key=4aa6c8dc93f5e3d4e9afffffd8fc4209',
	dataType: 'jsonp',
	success: function(json) {
		//currency in json.rates
		//alert(json.rates.GBP);
		//currency in json.base
		//alert(json.base);
		//timestamp in json.timestamp
		//alert(json.timestamp);

	}
});
endpoint = "convert";
access_key = "4aa6c8dc93f5e3d4e9afffffd8fc4209";
from = "USD";
to = $("input.id");
amount = $("#textbox").val();



document.body.addEventListener('click', convertCurrency);
function convertCurrency(event) {
  if ('type' in event.target && event.target.type === 'button') {
    console.log($("#textbox").val() * 
  			$.ajax({
url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,   
    dataType: 'jsonp',
    success: function(json) {

        // access the conversion result in json.result
        console.log(json.result);

  }
}
)

);}
 //       $("#output_amount").append($("<h2>" + success + "</h2>"));

}