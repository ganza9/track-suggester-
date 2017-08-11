var c = 0;
var ruby = 0;
var java = 0;
var button = document.getElementById('button');


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

function getResult() {
  if(c > ruby && c > java)
  {
    alert("You should learn C#");
  }
  else if(ruby > c && ruby > java)
  {
    alert("You should learn Ruby");
  }
  else if(java > c && java > ruby)
  {
    alert("You should learn Java");
  }
}



$(document).ready(function()
{
    $('.c').click(function(){
     document.getElementsByClassName("c").innerHTML = cUp();
    });

    $('.ruby').click(function(){
     document.getElementsByClassName("ruby").innerHTML = rubyUp();
    });

    $('.java').click(function(){
     document.getElementsByClassName("java").innerHTML = javaUp();
   });
 });
