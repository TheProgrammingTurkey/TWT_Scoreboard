

$('#addColumnChild').click(function(){
   $('#my-table tr').each(function(){
      $(this).append(`<th><input placeholder="Name"></th><td></td>`);
   });
});

$('#addRowChild').click(function(){
   $('#my-table tbody').append(`<tr>${$('#default-row').html()}</tr>`);
});