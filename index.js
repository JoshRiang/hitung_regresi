var x = [];
var y = [];

function addData() {
  // take the data from the input
  var xInput = document.getElementById("xinput").value;
  var yInput = document.getElementById("yinput").value;
  // add the data to the array
  x.push(xInput);
  y.push(yInput);
  // clear the input
  document.getElementById("xinput").value = "";
  document.getElementById("yinput").value = "";
  // add the data to the table id dataTable
  if (xInput.length != 0 && yInput.length != 0) {
    $("#dataTable").append(`
    <tr>
        <td>${xInput}</td>
        <td>${yInput}</td>
    </tr>
  `);
  }
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

function renderOutput(x, y) {
  console.log(x);
  console.log(y);

  var avgX = 0;
  var avgY = 0;

  for (var i = 0; i < x.length; i++) {
    avgX += x[i];
  }

  for (var i = 0; i < y.length; i++) {
    avgY += y[i];
  }

  avgX = avgX / x.length;
  avgY = avgY / y.length;

  let sumXY = 0;

  // loop every number in array
  for (var i = 0; i < x.length; i++) {
    // (x - avgX) * (y - avgY)
    sumXY += (x[i] - avgX) * (y[i] - avgY);
  }

  console.log("x bar : " + avgX);
  console.log("y bar : " + avgY);

  console.log("SSxy: " + sumXY);

  let sumXX = 0;

  for (var i = 0; i < x.length; i++) {
    // (x - avgX) * (y - avgY)
    sumXX += (x[i] - avgX) * (x[i] - avgX);
  }
  console.log("SSxx: " + sumXX);

  console.log("b: " + sumXY / sumXX);

  var a = 0;

  // a = avgY - b * avgX
  a = avgY - (sumXY / sumXX) * avgX;

  console.log("a: " + a);

  $("#outputForm").text(`    x bar : ${avgX} 
    y bar : ${avgY} 
    SSxy : ${sumXY} 
    SSxx : ${sumXX} 
    b : ${sumXY / sumXX} 
    a : ${a} 
  `);
}
