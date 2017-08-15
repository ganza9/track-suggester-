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

var c = 0;
var ruby = 0;
var java = 0;



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
    alert("You should learn C#. C# is most popular among bigger established businesses, often for building internal software. Because it's been around for a long time and has the backing of Microsoft, it is one of the most in-demand languages in the job market. C# has also been going through a bit of a rebirth lately, with Microsoft open sourcing the language and surrounding platform, porting it to run on Mac and Linux, and incorporating many of the best features of other languages. If you like the idea of working for a larger company on business software, C# is a great choice.");
  }
  else if(ruby > c && ruby > java)
  {
    alert("You should learn Ruby. Ruby is a favorite language of developers building interactive web applications. If an app involves users creating accounts, entering information, and interacting with dynamic content, there's a good chance it is built with Ruby. Ruby became popular because the Rails framework, which is written with Ruby, simplified many of the common tasks associated with building web applications. It's most popular with startups and smaller companies who are looking to build their product quickly.");
  }
  else if(java > c && java > ruby)
  {
    alert("You should learn Java. Java is also a favorite of enterprise companies, but its appeal is broader as well: it's one of the most popular of all programming languages, and it's used in everything from for high-performance processing to building Android user interfaces. Because Java has been very popular for a very long time and is used in so many applications, it is also a very high-demand language. If you're interested in working for an enterprise-level company, as an Android developer, or in high-performance applications, Java could be a good language to learn.");
  }

  else if(c = java = ruby)
  {
    alert("You should take the Intro to Programming course! Each week of Intro to Programming will cover a new set of concepts, tools and objectives. In addition to learning new skills, you will find that you are learning a whole new technical language, as well, with new terminology at every turn. Do not feel the need to memorize any code or vocabulary as you go through lessons. Daily practice will reinforce the concepts and skills that you need to be successful. ")
  }
}
