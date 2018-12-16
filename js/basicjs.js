$(function() {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var no = /\d/ig;
  //validation for email or phone no.
  $(".body2Row2Row2Row1Col2 input").on("keydown", function() {
    if (re.test(String($(".body2Row2Row2Row1Col2 input").val()).toLowerCase()) == true || (no.test($(".body2Row2Row2Row1Col2 input").val()) == true && $(".body2Row2Row2Row1Col2 input").val().length >= 10)) {
      $(".body2Row2Row2Row1Col3").html('<i class="fas fa-check-circle"></i>');
      $(".userNameLabel").css('display', 'none');
      $(".passwordLabel").css('display', 'none');
      $(".body2Row2Row2Row2Col3").html('');
    } else if ($(".body2Row2Row2Row1Col2 input").val() == "") {
      $(".userNameLabel").css('display', 'none');
      $(".body2Row2Row2Row1Col3").html('');
      $(".passwordLabel").css('display', 'none');
    } else {
      $(".userNameLabel").css('display', 'block');
      $(".userNameLabel").html('Please enter a valid User Name');
      $(".body2Row2Row2Row1Col3").html('');
      $(".passwordLabel").css('display', 'none');
      $(".body2Row2Row2Row2Col3").html('');
    }
  });


  $('.body2Row2Row2Row2Col2 input').on('keydown', function() {
    if ($('.body2Row2Row2Row2Col2 input').val().length > 0) {
      $(".passwordLabel").css('display', 'none');
      $(".body2Row2Row2Row2Col3").html('<i class="fas fa-check-circle"></i>');
    } else {
      $(".passwordLabel").css('display', 'none');
      $(".body2Row2Row2Row2Col3").html('');
    }
  })


  $(".body2 button").on("click", function() {
    $(this).html('');
    $(this).addClass('showImage');

    setTimeout(function() {
      $(".body2Row2Row2Row1 input").val("");
      $(".userNameLabel").css('display', 'block');

      $(".body2Row2Row2Row1Col3").html('<i class="fas fa-exclamation-triangle"></i>');

      $(".body2Row2Row2Row2 input").val("");
      $(".passwordLabel").css('display', 'block');
      $(".body2Row2Row2Row2Col3").html('<i class="fas fa-exclamation-triangle"></i>');

      $(".body2 button").html('Log In');
      $(".body2 button").removeClass('showImage');
    }, 1000)
  })
})
