var moment = require('moment');
$(document).ready(function() {
  $("#time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
$("#time-button").click(function(){
  $('.time-body').text("You set the alarm for:" + $("#input-time").val());
});
});
