$("#addColumnChild").click(function () {
    $("#my-table #topRow").append("<th><input placeholder='Name'></th>");
    $("#my-table #default-row").append("<td></td>");
  
});

$('#addRowChild').click(function(){
  $('#my-table tbody').append(`<tr>${$('#default-row').html()}</tr>`);
});


$("#deleteRowChild").click(function () {
  document.getElementById("my-table").deleteRow(-1);
});

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

                           
                           
                           
//  add  https://www.w3schools.com/jsref/met_table_insertrow.asp