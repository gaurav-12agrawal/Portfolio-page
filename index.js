//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #1cb889}";
  document.body.appendChild(css);
};
document.querySelector(".btn-chat").addEventListener("click", function () {
  location.href = "mailto:21ucc041@lnmiit.ac.in";
  var activeButton = document.querySelector("." + "btn-chat");
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 300)
})
document.querySelector(".btn2").addEventListener("click", function () {
  location.href = "#contact";
  var activeButton = document.querySelector("." + "btn2");
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 300);
})

document.querySelector(".interest-tag1").addEventListener("click", function () {
  document.querySelector(".interest-image").src = "images/webdjpg.png";

  document.querySelectorAll(".interest-tag")[0].classList.remove("fill-color");
  document.querySelectorAll(".interest-tag")[1].classList.remove("fill-color");
  document.querySelectorAll(".interest-tag")[2].classList.remove("fill-color");
  document.querySelectorAll(".interest-tag")[3].classList.remove("fill-color");
  document.querySelector(".interest-tag1").classList.add("fill-color");


})

document.querySelector(".interest-tag2").addEventListener("click", function () {
  document.querySelectorAll(".interest-tag")[0].classList.remove("fill-color");
  document.querySelectorAll(".interest-tag")[1].classList.remove("fill-color");
  document.querySelectorAll(".interest-tag")[2].classList.remove("fill-color");
  document.querySelectorAll(".interest-tag")[3].classList.remove("fill-color");
  document.querySelector(".interest-image").src = ("images/graphic.png");
  document.querySelector(".interest-tag2").classList.add("fill-color");



})
document.querySelector(".interest-tag3").addEventListener("click", function () {
  document.querySelectorAll(".interest-tag")[0].classList.remove("fill-color");
  document.querySelectorAll(".interest-tag")[1].classList.remove("fill-color");
  document.querySelectorAll(".interest-tag")[2].classList.remove("fill-color");
  document.querySelectorAll(".interest-tag")[3].classList.remove("fill-color");
  document.querySelector(".interest-image").src = ("images/cp.png");
  document.querySelector(".interest-tag3").classList.add("fill-color");

})
document.querySelector(".interest-tag4").addEventListener("click", function () {
  document.querySelectorAll(".interest-tag")[0].classList.remove("fill-color");
  document.querySelectorAll(".interest-tag")[1].classList.remove("fill-color");
  document.querySelectorAll(".interest-tag")[2].classList.remove("fill-color");
  document.querySelectorAll(".interest-tag")[3].classList.remove("fill-color");
  document.querySelector(".interest-image").src = ("images/appd.png");
  document.querySelector(".interest-tag4").classList.add("fill-color");

})
