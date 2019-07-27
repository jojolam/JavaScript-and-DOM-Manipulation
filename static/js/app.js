// from data.js
var tableData = data;

// Console.log the data from data.js
console.log (tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with report values ( datetime,city,state,country,shape,durationminutes,comments)
data.forEach(function(Report) {
  console.log(Report);
  var row = tbody.append("tr");
   Object.entries(Report).forEach(function([key, value]) {
     console.log(key, value);
     var cell = tbody.append("td");
     cell.text(value);
   });
 });


// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = data.filter(data => data.datetime === inputValue);

  tbody.html("");

  filteredData.forEach((datetimeData) => {
    var row = tbody.append("tr");
    Object.entries(datetimeData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});



