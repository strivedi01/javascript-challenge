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

var Filters={}
function createFilters() {
  var changedElement=d3.select(this).select("input");
  var elementValue=changedElement.property("value");
  var id = changedElement.attr("id");
  if (elementValue) {
    Filters[id]=elementValue;

  }
  else {
    delete Filters[id];
  }
  filterufodata();
}
function filterufodata() {
  
  var ufo = data;
  Object.entries(Filters).forEach(([key,value])=>{
  filterdata=ufo.filter(row=> row[key]===value);
  });

  
  buildtable(filterdata);
}
d3.selectAll(".filter").on("change", createFilters);



