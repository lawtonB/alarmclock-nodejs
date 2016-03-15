var moment = require('moment');


$(document).ready(function() {

  // (function update_time(){
  //     var now = moment().format('HH:mm:ss');
  //     $('#time').text(now);
  //     setTimeout(update_time, 1000);
  // })();

  $(document).ready(function update_time() {
  $('#time').text(moment().format("HH:mm"));
  setTimeout(update_time, 1000);
});

$(document).ready(function update_time_slow() {
   setTimeout(update_time_slow, 1000);
   if (alarmTime === consoleTime.text()) {
     $(".time-body").append("<li>"+"WakeUp"+"</li>");
   }
 });

  var consoleTime = $('#time').text(moment().format("HH:mm"));
  var alarmTime = $("#input-time").val();


  $("#time-button").click(function(){
    alarmTime = $("#input-time").val();
    $('.time-body').text("You set the alarm for:" + alarmTime);
  });

});
