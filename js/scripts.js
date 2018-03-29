function pingpong(startPoint) {
  if ((startPoint % 3 === 0 && startPoint % 5 === 0)) {
    return ('pingpong');
  } else if (startPoint % 5 === 0) {
    return ('pong');
  } else if (startPoint % 3 === 0) {
    return ('ping');
  } else {
    return startPoint;
  }
}

$(document).ready(function() {
  $('#b').click(function(event) {
    var userNumber = parseInt($('input#pan').val());
    event.preventDefault();
    $('ul.pet').empty();
    for (var startPoint = 1; startPoint <= userNumber; startPoint += 1) {
      $('ul.pet').append('<li>' + pingpong(startPoint) + '</li>');
    }
  });
});
