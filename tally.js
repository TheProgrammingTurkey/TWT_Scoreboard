let columns = 2;
let rows = 2;
let table = document.getElementById("gameTable");


//add column
$("#addColumnChild").click(function () {
  let nameRow = document.getElementById("nameRow");
  let nameCell = document.createElement("th");
  nameCell.innerHTML = "<input placeholder='Name' class='name' >";
  nameRow.appendChild(nameCell);

  let ovrScoreRow = document.getElementById("ovrScoreRow");
  let ovrScoreCell = document.createElement("th");
  ovrScoreCell.innerHTML = `<div class='ovrScore' id='player-ovr-score-${columns}'>0</div>`;
  ovrScoreRow.appendChild(ovrScoreCell);
  
  let plusMinusRow = document.getElementById("plusMinusRow");
  let plusMinusCell = document.createElement("th");
  plusMinusCell.innerHTML = `<button class="button-plus" id="button-plus-${columns}" onclick="addScore()">&plus;</button><button class="button-minus" id="button-minus-${columns}" onclick="minusScore()">&minus;</button>`;
  plusMinusRow.appendChild(plusMinusCell);

  let rowElements = document.getElementsByClassName("score-row");

  for (let i = 0; i < rowElements.length; i++) {
    let cell = document.createElement("td");
    cell.innerHTML = `<input class='score player-${columns}' onchange='calcScore()' type="number" value=0>`;
    rowElements[i].appendChild(cell);
  }
  columns += 1;
});

//add row
$("#addRowChild").click(function () {
  let row = document.createElement("tr");
  row.classList.add("score-row");
  row.setAttribute("id", "score-row-"+rows)

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



let playerScore0 = 0
let playerScore1 = 0
let playerScore2 = 0
let playerScore3 = 0
let playerScore4 = 0
let playerScore5 = 0
let playerScore6 = 0
let playerScore7 = 0


function addScore0(){
  playerScore0+=1
  document.getElementById("player-ovr-score-0").innerHTML = playerScore0
}
function minusScore0(){
  playerScore0-=1
  document.getElementById("player-ovr-score-0").innerHTML = playerScore0
}


function addScore1(){
  playerScore1+=1
  document.getElementById("player-ovr-score-1").innerHTML = playerScore1
}
function minusScore1(){
  playerScore1-=1
  document.getElementById("player-ovr-score-1").innerHTML = playerScore1
}


function addScore2(){
  playerScore2+=1
  document.getElementById("player-ovr-score-1").innerHTML = playerScore2
}
function minusScore2(){
  playerScore2-=1
  document.getElementById("player-ovr-score-1").innerHTML = playerScore2
}


function addScore3(){
  playerScore3+=1
  document.getElementById("player-ovr-score-1").innerHTML = playerScore3
}
function minusScore3(){
  playerScore3-=1
  document.getElementById("player-ovr-score-1").innerHTML = playerScore3
}


function addScore4(){
  playerScore4+=1
  document.getElementById("player-ovr-score-1").innerHTML = playerScore4
}
function minusScore4(){
  playerScore4-=1
  document.getElementById("player-ovr-score-1").innerHTML = playerScore4
}


function addScore5(){
  playerScore5+=1
  document.getElementById("player-ovr-score-1").innerHTML = playerScore5
}
function minusScore5(){
  playerScore5-=1
  document.getElementById("player-ovr-score-1").innerHTML = playerScore5
}


function addScore6(){
  playerScore6+=1
  document.getElementById("player-ovr-score-1").innerHTML = playerScore6
}
function minusScore6(){
  playerScore6-=1
  document.getElementById("player-ovr-score-1").innerHTML = playerScore6
}


function addScore7(){
  playerScore7+=1
  document.getElementById("player-ovr-score-1").innerHTML = playerScore7
}
function minusScore7(){
  playerScore7-=1
  document.getElementById("player-ovr-score-1").innerHTML = playerScore7
}