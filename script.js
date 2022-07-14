$("#addColumnChild").click(function () {
    $("#my-table #topRow").append("<th><input placeholder='Name'></th>");
    $("#my-table #default-row").append("<td></td>");
  
});

$('#addRowChild').click(function(){
  $('#my-table tbody').append(`<tr>${$('#default-row').html()}</tr>`);
});


$("#deleteColumnChild").click(function () {
  document.getElementById("my-table").deleteRow(-1);
});

                           
                           
                           
//  add  https://www.w3schools.com/jsref/met_table_insertrow.asp