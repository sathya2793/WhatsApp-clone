/* view profile */
$(".pic").click(function() {
  $('.profile').css('left', '0');
  $('.main').css('left', '-100%');
});
$(".back_main").click(function() {
  $('.profile').css('left', '-100%');
  $('.main').css('left', '0');
});

/* sending msg in chat */
$(document).on('keyup', '.reply_main input', function() {
  if ($(this).val().length > 0) {
    $('.reply_recording').hide();
    $('.reply_send').show();
  } else {
    $('.reply_send').hide();
    $('.reply_recording').show();
  }
});

/* staring hide item */
$('.reply_send').hide();
$('.back_chat').hide();

/* handle menu list click */
$(".menu_row").click(function() {
  isclicked = true;
  if ($(window).width() <= 767) {
    $('.main_side').hide();
    $('.chat_side').show();
    $('.back_chat').show();
  }
});

/* back button on chat page */
$(".back_chat").click(function() {
  $('.main_side').show();
  $('.chat_side').hide();
});

/* handel resize window */
$(window).on('resize', function() {
  var win = $(this);
  if ($(window).width() <= 767) {
    $('.main_side').show();
    $('.chat_side').hide();
  } else {
    $('.main_side').show();
    $('.chat_side').show();
    $('.back_chat').hide();
  }
});
