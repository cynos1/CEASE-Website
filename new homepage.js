// JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//slideshow code
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500); // Change image every 3.5 seconds
}


$('.carousel').carousel({
  interval: 2000
})



const firebaseConfig = {
  apiKey: "AIzaSyDslWzjWJlzaxFATIuFrLH4P_3-YbwqbjQ",
  authDomain: "cease2-0.firebaseapp.com",
  projectId: "cease2-0",
  storageBucket: "cease2-0.appspot.com",
  messagingSenderId: "293413559455",
  appId: "1:293413559455:web:8f163f26e81d2c6e5896aa",
  measurementId: "G-FGHDPYH63W"
};