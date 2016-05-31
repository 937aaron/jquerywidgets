// var textvalue = $("textarea").val().length;
// var maxlength = 10;
// console.log(textvalue);


$("textarea").keyup(function(){


  var textvalue = $("textarea").val().length;
var maxlength = 140;
console.log(textvalue);

  $(".remaining").text(maxlength - textvalue + " characters remaining");
  console.log(textvalue);

  console.log("Hello");
});
