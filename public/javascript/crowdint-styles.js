$(function() {
  // This function checks if input fields has information captured.
  // if so, it applies a class that changes the looknfeel of the input box.
  $('input').keyup(function() {
    $(this).removeClass('has-info');
    hasInfo = $(this).val() != "";
    $(this).toggleClass('entering-info', hasInfo);
  });

  $('input').focusout(function() {
    hasInfo = $(this).val() != "";
    $(this).toggleClass('has-info', hasInfo);
  });

});
