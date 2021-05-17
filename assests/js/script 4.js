$(document).ready(function () {
  $('button').click(function () {
    $('#text').css('color', $(this).attr('id'));
  });
});
