$(document).ready(function() {
  var maildiv = $('#maildiv');

  function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
$('#nameinput').focus(function() {
  $('#nameimport').removeClass("errorname");
});
$('#nameinput').blur(function() {
  if($('#nameinput').val() == "") {
    $('#nameimport').addClass("errorname");
    $('#nameinput').css("border-color", "#900");
  }
});

$('#surnameinput').focus(function() {
  $('#surnameimport').removeClass("errorsurname");
});
$('#surnameinput').blur(function() {
  if($('#surnameinput').val() == "") {
    $('#surnameimport').addClass("errorsurname");
    $('#surnameinput').css("border-color", "#900");
  }
});

$('#passwordinput').focus(function() {
  $('#passimport').removeClass("errorpass");
});
$('#passwordinput').blur(function() {
  if($('#passimport').val() == "") {
    $('#passimport').addClass("errorpass");
    $('#passwordinput').css("border-color", "#900");
  }
});


    $('#repeatmail').focus(function() {
      $('#repeatimport').removeClass("errorrepeat");
        });

  $('#repeatmail').blur(function() {
    if(isEmail($('#repeatmail').val()) == false || $('#repeatmail').val() == "") {
      $('#repeatimport').addClass("errorrepeat");
      $('#repeatmail').css("border-color", "#900");
    }
  });



$('#mail').focus(function() {
  $('#mailimport').removeClass("errormail");
    });

$('#mail').blur(function() {
if(isEmail($('#mail').val()) == false || $('#mail').val() == "") {
  $('#mailimport').addClass("errormail");
  $('#mail').css("border-color", "#900");
}
});

});
