let myButton = document.getElementById("btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    myButton.style.display = "block";
    myButton.style.animationName = "animate";
  } else {
    myButton.style.display = "none";
    myButton.style.animationName = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}