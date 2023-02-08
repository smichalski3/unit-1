// initializes function
function initialize(){
	cities();
}

// function to create cities 
function cities(){
	// sets cityPop variable 
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];
	// creates table element
	var table = document.createElement("table");
	// creates header row element 
	var headerRow = document.createElement("tr");
	table.appendChild(headerRow);
	// creates column headers 
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
// city loop, adds new row for each city  
cityPop.forEach(function(cityObject){
		var rowHtml = "<tr><td>" + cityObject.city + "</td><td>" + cityObject.population + "</td></tr>";
		table.insertAdjacentHTML('beforeend',rowHtml);
})
	// append table to myDiv in the index 
	document.querySelector("#myDiv").appendChild(table);

addColumns(cityPop);
addEvents();

};


// function to add new column to the table 
function addColumns(cityPop){

	var rows = document.querySelectorAll("tr")
	// loop to add column to each row 
    document.querySelectorAll("tr").forEach(function(row, i){
		// for first row, add column header
    	if (i == 0){
				// create new header and add to table 
				newHeader = document.createElement('th');
				newHeader.innerHTML = 'City Size';

				row.appendChild(newHeader)
    		
    	} else {
			var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			var newRow = document.createElement('td')
				newRow.innerHTML = citySize

				row.appendChild(newRow)
    	};
    });
};

// function to add events to the table 
function addEvents(){

	table = document.querySelector("table");
	// adds mouseover event 
	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";
		// generate random color 
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			} else {
				color += ")";
			};
		};
		// styles table with random style 
		table.style.color = color;
	}); 
	// function that shows alert when you click 
	function clickme(){
		alert('Hey, you clicked me!');
	};
	// add event listener for the click 
	table.addEventListener("click", clickme)
};

// calls the initialize function 
document.addEventListener('DOMContentLoaded',initialize)
