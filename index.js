var x = [];
var y = [];

function addData() {
  // take the data from the input
  var xInput = +document.getElementById("xinput").value;
  var yInput = +document.getElementById("yinput").value;
  if (xInput.length == 0 || yInput.length == 0) return;
  // add the data to the array
  x.push(xInput);
  y.push(yInput);
  // clear the input
  document.getElementById("xinput").value = "";
  document.getElementById("yinput").value = "";
  renderOutput(x, y);
  return;
}

function removeData() {
  // remove the last data from the array
  x.pop();
  y.pop();
  // remove the last data from the table
  $("#dataTable tr:last").remove();
  renderOutput(x, y);
  return;
}

function clearData() {
  // clear the array
  x = [];
  y = [];
  // clear the table
  $("#dataTable").empty();
  $("#outputForm").empty();
  return;
}

function renderOutput(x, y) {
  // add the data to the table id dataTable
  $("#dataTable").empty();
  for (var i = 0; i < x.length; i++) {
    $("#dataTable").append("<tr><td>" + x[i] + "</td><td>" + y[i] + "</td></tr>");
  }

  if (x.length == 0 || y.length == 0) {
    $("#outputForm").empty().text("No data");
    return;
  };

  var avgX = 0;
  var avgY = 0;

  avgX = x.reduce((a,b)=>+a + +b) / x.length;

  avgY = y.reduce((a,b)=>+a + +b) / y.length;

  let sumXY = 0;

  // loop every number in array
  for (var i = 0; i < x.length; i++) {
    // (x - avgX) * (y - avgY)
    sumXY += (x[i] - avgX) * (y[i] - avgY);
  }

  let sumXX = 0;

  for (var i = 0; i < x.length; i++) {
    // (x - avgX) * (y - avgY)
    sumXX += (x[i] - avgX) * (x[i] - avgX);
  }

  let sumYY = 0
  for (var i = 0; i < x.length; i++) {
    // (x - avgX) * (y - avgY)
    sumYY += (y[i] - avgY) * (y[i] - avgY);
  }
 
  var a = 0;

  // a = avgY - b * avgX
  a = avgY - (sumXY / sumXX) * avgX

  // hitung r
  var r = 0 
  r = (sumXY/Math.sqrt((sumXX * sumYY)))

  $("#outputForm").text(`    x bar : ${avgX} 
    y bar : ${avgY} 
    SSxy : ${sumXY} 
    SSxx : ${sumXX} 
    SSyy : ${sumYY}
    b : ${sumXY / sumXX} 
    a : ${a} 
    r : ${r}
  `);
}
