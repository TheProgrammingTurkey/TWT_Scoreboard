let columns = 2;
let rows = 2;
let table = document.getElementById("gameTable");

//add column
$("#addColumnChild").click(function () {
  if(columns >= 6) 
    return
  
  //Row for the Player Names
  let nameRow = document.getElementById("nameRow");
  let nameCell = document.createElement("th");
  nameCell.innerHTML = "<input placeholder='Name' class='name' >";
  nameRow.appendChild(nameCell);

  //Row for each players total score
  let ovrScoreRow = document.getElementById("ovrScoreRow");
  let ovrScoreCell = document.createElement("th");
  ovrScoreCell.innerHTML = `<div class='ovrScore' id='player-ovr-score-${columns}'>0</div>`;
  ovrScoreRow.appendChild(ovrScoreCell);

  let rowElements = document.getElementsByClassName("score-row");

  //Add as many rows as needed for the amount of rounds that have been played
  for (let i = 0; i < rowElements.length; i++) {
    let cell = document.createElement("td");
    cell.innerHTML = `<div class='score player-${rows}-${i}'></div>`;
    rowElements[i].appendChild(cell);
  }
  columns += 1;
});

//Add a row
$("#addRowChild").click(function () {
  //Add new row to the table
  let row = document.createElement("tr");
  //Set classes and id for scoring
  row.classList.add("score-row");
  row.setAttribute("id", "score-row-"+rows)
  //Add cells in the new row for each new player
  for (let i = 0; i < columns; i++) {
    let cell = document.createElement("td");
    cell.innerHTML = `<input class='score player-${i}' onchange='calcScore()' type="number" value=0>`;
    row.appendChild(cell);
  }
  table.appendChild(row);
  rows+=1

});

//delete row
$("#deleteRowChild").click(function () {
  if(rows <= 2) 
    return
  
  document.getElementById("gameTable").deleteRow(-1);
  rows-=1
});

//delete column
$("#deleteColumnChild").click(function () {
  
  if(columns <= 2)
    return
  // Getting the rows in table.
  var row = table.rows;

  // Removing the column at index(1).
  var i = -1;
  for (var j = 0; j < row.length; j++) {
    // Deleting the ith cell of each row.
    row[j].deleteCell(i);
  }
  columns -= 1;
});

//When a round's score is changed, update all the scores
function calcScore(){
  for(let i = 0; i < columns; i++){
    let playerScores = document.getElementsByClassName(`player-${i}`)
    let playerScore = 0
    
    for (let i = 0; i < playerScores.length; i++) {
      let input = playerScores[i]
      playerScore+=parseInt(input.value)
      }
    document.getElementById(`player-ovr-score-${i}`).innerHTML = playerScore
  }
}