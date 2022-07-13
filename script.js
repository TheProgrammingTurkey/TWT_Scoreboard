$('#addRowChild').click(function(){
   $('#my-table tbody').append(`<tr>${$('#default-row').html()}</tr>`);
});

$("#addColumnChild").click(function () {
    $("#my-table #topRow").append("<th><input placeholder='Name'></th>");
    $("#my-table #default-row").append("<td></td>");
  
});

