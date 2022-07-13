

//$('#addColumnChild').click(function(){
 //  $('#my-table tr').each(function(){
 //     $(this).append(`<th><input placeholder="Name"></th>`);
 //  });
//});

$('#addRowChild').click(function(){
   $('#my-table tbody').append(`<tr>${$('#default-row').html()}</tr>`);
});

$("#addColumnChild").click(function () {
    alert("Hello! I am an alert box!!");
    // Loop over the rows of the table and append the td tag
    $(".abc tr").append("<tr>col1</tr>");
});