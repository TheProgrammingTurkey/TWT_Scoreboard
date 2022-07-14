

$("#addColumnChild").click(function () {
    $("#my-table #topRow").append("<th><input placeholder='Name'></th>");
    $("#my-table #default-row").append("<td></td>");
  
});

//$('#addRowChild').click(function(){
//  $('#my-table tbody').append(`<tr>${$('#default-row').html()}</tr>`);
//});

$("#deleteColumnChild").click(function () {
  document.getElementById("my-table").deleteRow(-1);
});




$('#addRowChild').click(function()
    { var x=document.getElementById("my-table").tBodies[0];  //get the table
      var node=x.rows[0].cloneNode(true);    //clone the previous node or row
      x.appendChild(node);   //add the node or row to the table
    });  


