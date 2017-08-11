
var c = 0;
var ruby = 0;
var java = 0;
var modal = document.getElementById('myModal');

function cUp()
{
  c = c + 1;
}

function rubyUp()
{
  ruby = ruby + 1;
}

function javaUp()
{
  java = java + 1;
}





$(document).ready(function(){

  $('.c').click(function () {
   document.getElementsByClassName("c").innerHTML = cUp();
  });

  $('.ruby').click(function () {
   document.getElementsByClassName("ruby").innerHTML = rubyUp();
  });

  $('.java').click(function () {
   document.getElementsByClassName("java").innerHTML = javaUp();
  });




});
