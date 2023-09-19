/***********************************************/
/* TOKEN GENERATOR PAGE  */
/***********************************************/

$(function() {
  //inputs value
  $("#inputs").on('input', 'input[type=text]', function(event) {
  var i = $(this).closest(".flex-row").index();
  var v = (i == 0) ? $(this).val() : "|" + $(this).val();
  $("#custom_wrapper .output").eq(i).html(v);
});

$('.add').click(function() {
  var count = $("#inputs input").length;
  count++;
  var row = $("<div>", {
  class: "flex-row"
  }).insertBefore(this);
$("<label>").appendTo(row);
$("<input>", {
    type: "text",
    class: "input",
    placeholder: "custom text " + count,
    id:"custom-text-" +count,
    tabindex: count
  }).appendTo($("label", row));
$("<button>", {
    class: "remove"
  }).html("-").appendTo(row);
$("<span>", {
    class: "output",
    dataid:"custom-text-" +count,
  }).insertAfter($("#custom_wrapper .output:last"));
});
      
$('body').on('click','.remove', function(){
  $(this).parent('.flex-row').remove();  
  var j =$(this).parent().find('.input').attr("id");
  $('#custom_wrapper .output[dataid="'+ j +'"').empty();    
}) 

//input email fragments
$('.fragment-quantity').on('change', function () {
  var q = $(this).closest(".flex-col-sm-6").index();
  var y = (q == 0) ? $(this).val() : "," + $(this).val();
  $("#custom_nb_wrapper .qty-output").eq(q).html(y);
});

  /***********************************************/
/* COPY TO CLIPBOARD FUNCTION */
/***********************************************/
function copy(element) {
var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val($(element).parent().find('.token').text()).select();
    document.execCommand("copy");
    $temp.remove();
}

})
