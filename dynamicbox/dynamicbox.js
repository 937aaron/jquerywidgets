
var morebox = $(".morebox");

$.each(morebox, function(i, morebox){
  $(morebox).change(function(){
    $(".wrapper").append("<input class =morebox type=text/>");
    console.log("Hello");

  });

  //  $(".morebox").blur(function(){
  //    var morebox = $(".morebox");
   //
  //    if (morebox.HTML=""){
  //         morebox.remove();
  //    }
  //  });
  // $(".wrapper").append("<input class =morebox type=text/>");
  // console.log("Hello");
 });


// $(".morebox").change(function(){
//   $(".wrapper").append("<input class =morebox type=text/>");
//   console.log("Hello");
// });
