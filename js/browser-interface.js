var moment = require('moment');


$(document).ready(function() {

  (function update_time(){
      var now = moment().format('h:mm:ss');
      $('#time').text(now);
      setTimeout(update_time, 1000);
  })();

$("#time-button").click(function(){
  var alarmTime = $("#input-time").val();
  $('.time-body').text("You set the alarm for:" + alarmTime);

  var $ins = $('#time, #input-time').on(function() {
    if ($('#time').val() == $('#input-time')) {
      alert("alarm activated");
    }
  });
});
});
