// from data.js
var ufo = data;
    console.log(ufo)

// YOUR CODE HERE!

// Get a reference to the table body
function buildtable(data) {


var tbody = d3.select("tbody");
tbody.html("");

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
buildtable(ufo)

function filterdata() {
  var formdata = d3.select("#datetime").property("value");
  // var ufo = data;
  filterdate=ufo.filter(row => row.datetime===formdata)
  console.log(filterdate)
  buildtable(filterdate)
}
d3.selectAll("#filter-btn").on("click", filterdata);


//   // Assign the data from `data.js` to a descriptive variable
// var ufo = data;

// // Select the button
// var button = d3.select("#filter-btn");

// // Select the form
// var form = d3.select("#datetime");

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

// // Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(ufo);

//   var filteredData = ufo.filter(date => ufo.datetime === inputValue);

//   console.log(filteredData);
