let columns = 2;
let rows = 2;
let table = document.getElementById("gameTable");


//add player
$("#addColumnChild").click(function () {
  if(columns >= 8) 
    return
  
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
  plusMinusCell.innerHTML = `<button class="button-plus" onclick="addScore${columns}()">&plus;</button><button class="button-minus" onclick="minusScore${columns}()">&minus;</button>`;
  plusMinusRow.appendChild(plusMinusCell);

  let rowElements = document.getElementsByClassName("score-row");

  for (let i = 0; i < rowElements.length; i++) {
    let cell = document.createElement("td");
    cell.innerHTML = `<div class='score player-${columns}'></div>`;
    rowElements[i].appendChild(cell);
  }
  columns += 1;
});

//add round
$("#addRowChild").click(function () {  
  if(rows >= 5) 
    return
  
  let row = document.createElement("tr");
  row.classList.add("score-row");
  row.setAttribute("id", "score-row-"+rows)

  for (let i = 0; i < columns; i++) {
    let cell = document.createElement("td");
    cell.innerHTML = `<div class='score' id='player-${rows}-${i}'></div>`;
    row.appendChild(cell);
  }
  table.appendChild(row);
  rows+=1
  
  
  if (rows == 3) {
    let score = document.getElementById('player-2-0')
    score.innerHTML = playerScore0
  }
  
  if (rows == 3) {
    let score = document.getElementById('player-2-1')
    score.innerHTML = playerScore1
  }
  
  if (rows == 3) {
    let score = document.getElementById('player-2-2')
    score.innerHTML = playerScore2
  }
  
  if (rows == 4) {
    let score = document.getElementById('player-3-0')
    score.innerHTML = playerScore0
  }
  
  if (rows == 4) {
    let score = document.getElementById('player-3-1')
    score.innerHTML = playerScore1
  }
  
  if (rows == 4) {
    let score = document.getElementById('player-3-2')
    score.innerHTML = playerScore0
  }
  
  if (rows == 5) {
    let score = document.getElementById('player-4-0')
    score.innerHTML = playerScore0
  }
  
  if (rows == 5) {
    let score = document.getElementById('player-4-1')
    score.innerHTML = playerScore0
  }
  
  if (rows == 5) {
    let score = document.getElementById('player-4-2')
    score.innerHTML = playerScore0
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
  document.getElementById("player-ovr-score-2").innerHTML = playerScore2
}
function minusScore2(){
  playerScore2-=1
  document.getElementById("player-ovr-score-2").innerHTML = playerScore2
}


function addScore3(){
  playerScore3+=1
  document.getElementById("player-ovr-score-3").innerHTML = playerScore3
}
function minusScore3(){
  playerScore3-=1
  document.getElementById("player-ovr-score-3").innerHTML = playerScore3
}


function addScore4(){
  playerScore4+=1
  document.getElementById("player-ovr-score-4").innerHTML = playerScore4
}
function minusScore4(){
  playerScore4-=1
  document.getElementById("player-ovr-score-4").innerHTML = playerScore4
}


function addScore5(){
  playerScore5+=1
  document.getElementById("player-ovr-score-5").innerHTML = playerScore5
}
function minusScore5(){
  playerScore5-=1
  document.getElementById("player-ovr-score-5").innerHTML = playerScore5
}


function addScore6(){
  playerScore6+=1
  document.getElementById("player-ovr-score-6").innerHTML = playerScore6
}
function minusScore6(){
  playerScore6-=1
  document.getElementById("player-ovr-score-6").innerHTML = playerScore6
}


function addScore7(){
  playerScore7+=1
  document.getElementById("player-ovr-score-7").innerHTML = playerScore7
}
function minusScore7(){
  playerScore7-=1
  document.getElementById("player-ovr-score-7").innerHTML = playerScore7
}