$(function() {
  // This function checks if input fields has information captured.
  // if so, it applies a class that changes the looknfeel of the input box.
  $('input').keyup(function() {
    hasInfo = $(this).val() != "";
    $(this).toggleClass('has-info', hasInfo);
  });
});
