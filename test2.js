let columns = 2
let rows = 1

$("#addColumnChild").click(function () {
   //$("#my-table #default-row").append("<td></td>");
  let topRow = document.getElementById("topRow")
  let headerCell = document.createElement("th")
  headerCell.innerHTML = "<input placeholder='Name'>"
  topRow.appendChild(headerCell)
  let rowElements = document.getElementByClassName("score-row")
  
  for (let i=0; i<rowElements.length; i++){
    let cell = document.createElement("td")
    cell.innerHTML = "<input class='score'>"
    rowElements[i].appendChild(cell)
  }
  

  
    columns+=1
  
});

$('#addRowChild').click(function(){
  let myTable = document.getElementById("my-table")
  let row = document.createElement("tr")
  row.classList.add("score-row")
  
  for (let i=0; i<columns; i++){
    let cell = document.createElement("td")
    cell.innerHTML = "<input class='score'>"
    row.appendChild(cell)
  }
  rows+=1
  myTable.appendChild(row)
});


$("#deleteRowChild").click(function () {
  document.getElementById("my-table").deleteRow(-1);
  rows-=1
});




//$('#addRowChild').click(function()
  //  { var x=document.getElementById("my-table").tBodies[0];  //get the table
  //    var node=x.rows[1].cloneNode(true);    //clone the previous node or row
   //   x.appendChild(node);   //add the node or row to the table
  //  });  


$('#deleteColumnChild').click(function(){
  
            // Getting the table
            var tble = document.getElementById('my-table'); 
  
            // Getting the rows in table.
            var row = tble.rows;  
  
            // Removing the column at index(1).  
            var i = 1; 
            for (var j = 0; j < row.length; j++) {
  
                // Deleting the ith cell of each row.
                row[j].deleteCell(i);
            }
            columns-=1
        });