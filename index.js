// Import stylesheets
import './style.css';

// Write Javascript code!
// $(document).ready(function () {
//   var arr = []; //array to save items
//   var check = []; //array to save checked and unchecked and all items
//   var ls = ''; //list of li elements
//   var lsInput = ''; //input with in the li elements
//   var btns = $(".btn"); //buttons

//   //Add active class on buttons when clicked
//   for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//       var current = $(".active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });
//   }

//   //save the items
//   $('#save').on('click', function () {
//     var add = $('input[id=list-input]').val();
//     if (add.length == 0) {
//       $('#error').html("Please enter the item");
//     }
//     else {
//       $('#error').html("");
//       $.fn.additem(add);
//       $('input[id=list-input]').val('');
//     }
//   })

//   //add checkboxes with the items and append in list.
//   $.fn.additem = function (name) {
//     var chk = $('<input />').attr({ type: 'checkbox'});
//     var li = $('<li></li>');
//     arr.push(name);
//     $(li).append(chk).append(name);
//     $('ol[id=list-output]').append(li);
//   }

//   // on clicking Checked button save the checked items in a array
//   $('#selected').on('click', function () {
//     ls = $('#list-output li');
//     lsInput = $('#list-output li input');
//     check = [];
//     $("li").each(function (index) {
//       if (lsInput[index].checked == true) {
//         $(this).find('input').attr({checked:''});
//         check.push($(this).html());
//       }
//     });
//     $.fn.view(check, "Checked item(s) are:");
//   });

//   // on clicking Unchecked button save the unchecked items in a array
//   $('#unselected').on('click', function () {
//     ls = $('#list-output li');
//     lsInput = $('#list-output li input');
//     check = [];
//     $("li").each(function (index) {
//       if (lsInput[index].checked != true) {
//         $(this).find('input').attr({unchecked:''});
//         //console.log($(this).clone());
//         check.push($(this).html());
//       }
//     });
//     $.fn.view(check, "Unchecked item(s) are:");
//   });

//   // on clicking Show All button save the All items in a array
//   $('#all').on('click', function () {
//     var ls = $('#list-output li');
//     check = [];
//     $("li").each(function (index) {
//       check.push($(this).html());
//     });
//     $.fn.view(check, "All item(s) are:");
//   });

//   //show items
//   $.fn.view = function (array, heading) {
//     $('#heading').html(heading);
//     if (array.length == 0) {
//       $('#items').html('No Item');
//     }
//     else {
//       $('#items').html(array.join('<br>'));
//     }
//   }
// });



$(document).ready(function () {
  //declaration
  var count = 0;
  var btns = $(".btn"); //buttons
  var arr = [];
  var checkarr = [];
  var Uncheckedarr = [];
  function item(id, value, done) {
    this.id = new Number();
    this.value = value;
    this.done = done;
  }

  //Add active class on buttons when clicked
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = $(".active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  //on clicking save button
  $('#save').on('click', function () {
    var item1 = new item();
    item1.value = $('#list-input').val();
    $('#list-output').html(item);
    if (item1.value.length == 0) {
      $('#error').html("Please enter the item");
    }
    else {
      $('#error').html("");
      $('#heading').html('Entered items:');
      count++;
      item1.id = count;
      item1.done = false;
      $.fn.additem(item1);
      $('#list-input').val('');
    }
  })


  $.fn.additem = function (object) {
    var chk = $('<input />').attr({ type: 'checkbox', id: 'itemlist' });
    var li = $('<li></li>');
    arr.push(object);
    $(li).append(chk).append(object.value);
    $('#items').append(li);
  }

  $('#items').on('click', function () {
    var checkbox = $('#items input');
    $('li').each(function (index) {
      if (checkbox[index].checked == true) {
        arr[index].done = true;
        checkbox[index].setAttribute("checked", true);
        checkarr.push(arr[index]);
      }
      else if (checkbox[index].checked != true) {
        arr[index].done = false;
        Uncheckedarr.push(arr[index]);
      }
    })
  })

  $('#selected').on('click', function () {
    $('#heading').html('Checked items are:');
    var checkbox = $('#items input');
    var li = $('<li></li>');
    console.log(checkarr);
    // $(arr).each(function (index) {
    //   if (arr[index].done == true){
    //     //$('#items').html(checkbox[index] , arr[index]);
    //     //$('#items').append(checkbox[index]).append(arr[index].value);
    //   }
    // })
  })

  $('#unselected').on('click', function () {
    $('#heading').html('Unchecked items are:');
    console.log(Uncheckedarr);
  })

  $('#all').on('click', function () {
    $('#heading').html('All items are:');
    $(arr).each(function (index) {
      if (arr[index].done == true) {
        console.log(arr[index].value);
      }
    })
  })
})