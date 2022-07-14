var z = 2

$("#addColumnChild").click(function () {
    $("#my-table #topRow").append("<th><input placeholder='Name'></th>");
    $("#my-table #default-row").append("<td></td>");
    z+=1
  
});

$('#addRowChild').click(function(){
  for (let i=0; i<z; i++){
  $('#my-table tbody').append(`<td></td>`);
  }
});


$("#deleteRowChild").click(function () {
  document.getElementById("my-table").deleteRow(-1);
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
        });