var frist_form = document.getElementById("div1");
var second_form = document.getElementById("div2");
var third_form = document.getElementById("div3");

var next1 = document.getElementById("next1");
var prev1 = document.getElementById("prev1");
var next2 = document.getElementById("next2");
var prev2 = document.getElementById("prev2");
var close = document.getElementById("close");

next1.addEventListener("click", function () {
  div2.style.display = "block";
  div1.style.display = "none";
  div3.style.display = "none";
});

prev1.addEventListener("click", function () {
  div1.style.display = "block";
  div2.style.display = "none";
  div3.style.display = "none";
});

next2.addEventListener("click", function () {
  div3.style.display = "block";
  div1.style.display = "none";
  div2.style.display = "none";
});

prev2.addEventListener("click", function () {
  div2.style.display = "block";
  div3.style.display = "none";
  div1.style.display = "none";
});

close.addEventListener("click", function () {
  div1.style.display = "block";
  div3.style.display = "none";
  div2.style.display = "none";
});
