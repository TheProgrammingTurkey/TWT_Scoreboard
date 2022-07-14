let columns = 2
let table = document.getElementById("gameTable")


//add column
$("#addColumnChild").click(function () {
  let topRow = document.getElementById("nameRow")
  let headerCell = document.createElement("th")
  headerCell.innerHTML = "<input placeholder='Name'>"
  topRow.appendChild(headerCell)
  let rowElements = document.getElementsByClassName("score-row")
  console.log(rowElements)
  
  for (let i=0; i<rowElements.length; i++){
    let cell = document.createElement("td")
    cell.innerHTML = "<input class='score'>"
    rowElements[i].appendChild(cell)
  }
    columns+=1
});

//add row
$('#addRowChild').click(function(){
  let row = document.createElement("tr")
  row.classList.add("score-row")
  
  for (let i=0; i<columns; i++){
    let cell = document.createElement("td")
    cell.innerHTML = "<input class='score'>"
    row.appendChild(cell)
  }
  table.appendChild(row)
});



//delete row
$("#deleteRowChild").click(function () {
  document.getElementById("gameTable").deleteRow(-1);
});





//delete column
$('#deleteColumnChild').click(function(){
  
            // Getting the rows in table.
            var row = table.rows;  
  
            // Removing the column at index(1).  
            var i = -1; 
            for (var j = 0; j < row.length; j++) {
  
                // Deleting the ith cell of each row.
                row[j].deleteCell(i);
            }
            columns-=1
        });