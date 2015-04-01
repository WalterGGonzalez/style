$(function() {
  // This function checks if input fields has information captured.
  // if so, it applies a class that changes the looknfeel of the input box.
  $('input').keyup(function(){
    if( $(this).val() != ""){
      $(this).addClass('has-info');
    }else{
      $(this).removeClass('has-info');
    }
  });
});
