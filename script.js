$('#addRowChild').click(function(){
   $('#my-table tbody').append(`<tr>${$('#default-row').html()}</tr>`);
});

$("#addColumnChild").click(function () {
    $("#my-table #topRow").append("<th><input placeholder='Name'></th>");
    $("#my-table #default-row").append("<td></td>");
  
});

//  remove   https://www.w3schools.com/jsref/met_table_deleterow.asp#:~:text=Delete%20the%20row%20you%20click%20on%3A%20function,deleteRow%20%28r%29%20%7B%20var%20i%20%3D%20r.parentNode.parentNode.rowIndex%3B%20document.getElementById%28%22myTable%22%29.deleteRow%28i%29%3B
//  add  https://www.w3schools.com/jsref/met_table_insertrow.asp