// Import stylesheets
import './style.css';

// Write Javascript code!
$(document).ready(function () {
  var arr = [];
  var check = [];
  $('#save').on('click', function () {
    var add = $('input[id=list-input]').val();
    if (add.length == 0) {
      $('#error').html("Please enter the item");
    }
    else {
      $('#error').html("");
      var chk = $('<input />').attr({ type: 'checkbox', name: 'Iqra' });
      var li = $('<li></li>');
      arr.push(add);
      $(li).append(chk).append(add);
      $('ol[id=list-output]').append(li);
      $('input[id=list-input]').val('');
    }
  })
  $('#selected').on('click', function () {
    $('#heading').html();
    var inputs = $('#output input');
    $.each(arr, function (index, value) {
      if (inputs[index].checked == true) {
        check.push(value);
      }
    })
    $.fn.view(check, "Checked item(s) are:");
    check = [];
  });
  $('#unselected').on('click', function () {
    var inputs = $('#output input');
    $.each(arr, function (index, value) {
      if (inputs[index].checked != true) {
        check.push(value);
      }
    })
    $.fn.view(check, "Unchecked item(s) are:");
    check = [];
  });
  $('#all').on('click', function () {
    $.fn.view(arr, "All item(s) are:");
  });
  $.fn.view = function (array, heading) {
    $('#heading').html(heading);
    if (array.length == 0) {
      $('#items').html('No Item');
    }
    else {
      $('#items').html(array.join('<br>'));
    }
  }
});