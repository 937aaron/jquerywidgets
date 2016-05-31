$(function() {
  'use strict';
});

$(".buttonhey").click(function(){
  $(".modal").removeClass("modalhide").addClass("show");
$(".buttonhey").text("Girl");
  console.log(2+2);
});

$(".x").click(function() {
  $(".modal").removeClass("show").addClass("modalhide");
  $(".buttonhey").text("Oh hey");
  console.log(3+3);
});

$(".modal-container").click(function() {
  $(".modal").removeClass("show").addClass("modalhide");
  $(".buttonhey").text("Oh hey");
  console.log(3+3);
});
