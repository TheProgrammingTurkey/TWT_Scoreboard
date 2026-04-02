let columns = 2;
let rows = 2;
let table = document.getElementById("gameTable");


//add player
$("#addColumnChild").click(function () {
  //Max Players
  if(columns >= 6) 
    return

  playerScores.push(0)
  
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
  
  //Row for the plus/minus buttons
  let plusMinusRow = document.getElementById("plusMinusRow");
  let plusMinusCell = document.createElement("th");
  plusMinusCell.innerHTML = `<button class="button-plus" onclick="addScore(${columns})">&plus;</button><button class="button-minus" onclick="minusScore(${columns})">&minus;</button>`;
  plusMinusRow.appendChild(plusMinusCell);

  let rowElements = document.getElementsByClassName("score-row");

  //Add as many rows as needed for the amount of rounds that have been played
  for (let i = 0; i < rowElements.length; i++) {
    let cell = document.createElement("td");
    cell.innerHTML = `<div class='score player-${rows}-${i}'></div>`;
    rowElements[i].appendChild(cell);
  }
  columns += 1;
});

//add round
$("#addRowChild").click(function () {  
  //create the row for the round
  let row = document.createElement("tr");
  row.classList.add("score-row");
  row.setAttribute("id", "score-row-"+rows)

  //Add cells in the new row for each new player
  for (let i = 0; i < columns; i++) {
    let cell = document.createElement("td");
    cell.innerHTML = `<div class='score' id='player-${rows}-${i}'></div>`;
    row.appendChild(cell);
  }
  table.appendChild(row);
  rows+=1
  //That rounds score is the overall score of that player
  for (let i = 0; i < columns; i++){
    document.getElementById(`player-${rows-1}-${i}`).innerHTML = playerScores[i];
  }            
});

//delete round
$("#deleteRowChild").click(function () {
  if(rows <= 2) 
    return
  
  document.getElementById("gameTable").deleteRow(-1);
  rows-=1
});

//delete player
$("#deleteColumnChild").click(function () {
  
  if(columns <= 2)
    return
  
  playerScores.pop()

  // Getting the rows in table.
  let row = table.rows;

  // Removing the column at index(1).
  let i = -1;
  for (let j = 0; j < row.length; j++) {
    // Deleting the ith cell of each row.
    row[j].deleteCell(i);
  }
  columns -= 1;
});


let playerScores = [0,0]
//When + button is clicked
function addScore(player){
  playerScores[player]+=1
  document.getElementById(`player-ovr-score-${player}`).innerHTML = playerScores[player];
}//When - button is clicked
function minusScore(player){
  playerScores[player]-=1
  document.getElementById(`player-ovr-score-${player}`).innerHTML = playerScores[player];
}