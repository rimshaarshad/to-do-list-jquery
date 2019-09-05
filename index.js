// Import stylesheets
import './style.css';

// Write Javascript code!
$(document).ready(function () {
  var arr = [];
  var check = [];
  var inputs = "";
  var list = "";
  var btns = $(".btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = $(".active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  $('#save').on('click', function () {
    var add = $('input[id=list-input]').val();
    if (add.length == 0) {
      $('#error').html("Please enter the item");
    }
    else {
      $('#error').html("");
      $.fn.additem(add);
      $('input[id=list-input]').val('');
    }
  })
  $('#selected').on('click', function () {
    $('#heading').html();
    inputs = $('#output input');
    list = $('#list-output li');
    $.each(arr, function (index) {
      if (inputs[index].checked == true) {
        console.log("here" + list[index]);
        check.push(list[index]);
      }
    })
    $.fn.view(check, "Checked item(s) are:");
    check = [];
  });
  $('#unselected').on('click', function () {
    inputs = $('#output input');
    list = $('#list-output li');
    $.each(arr, function (index) {
      if (inputs[index].checked != true) {
        console.log(list[index]);
        check.push(list[index]);
      }
    })
    $.fn.view(check, "Unchecked item(s) are:");
    check = [];
  });
  $('#all').on('click', function () {
    $.fn.view(arr, "All item(s) are:");
    //$('#list-output li').clone().appendTo('#items')
  });
  $.fn.additem = function (name) {
    var chk = $('<input />').attr({ type: 'checkbox'});
    var li = $('<li></li>');
    arr.push(name);
    $(li).append(chk).append(name);
    $('ol[id=list-output]').append(li);
  }
  $.fn.view = function (array, heading) {
    $('#heading').html(heading);
    if (array.length == 0) {
      $('#items').html('No Item');
    }
    else {
      console.log("view function:" + array);
      $('#items').html(array.join('<br>'));
    }
  }
  // $.fn.testing = function(){
  //   var li = $('#list-output > li > input');
  //   var li2 = $('#list-output > li');
  //   console.log(li);
  //   $.each(arr, function (index, value) {
  //     if (li[index].checked == true) {
  //       console.log(li2[index]);
  //     }
  //   })
  // }
});