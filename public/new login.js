// JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//show code
function showpassword() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function showpassword() {
  var x = document.getElementById("myInput1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//function openmessage(){
	//document.getElementById("popupmessage").style.display="block";
//}
//function closemessage(){
	//document.getElementById("popupmessage").style.display="none";
	//window.location.href="modulesurvey.html";
//}