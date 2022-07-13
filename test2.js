function myCreateFunction() {
  var table = document.getElementById("my-table");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
  cell3.innerHTML = "NEW CELL3";
}

$("#addColumnChild").click(function () {
    $("#my-table #topRow").append("<th><input placeholder='Name'></th>");
    $("#my-table #default-row").append("<td></td>");
  
});

//$('#addRowChild').click(function(){
//   $('#my-table tbody').append(`<tr>${$('#default-row').html()}</tr>`);
//});
