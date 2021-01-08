// JavaScript Document
$(function(){  // $(document).ready shorthand
  $('#quitmet').hide().fadeIn('slow');
});



/*document.getElementsByClassName('quitmet').addEventListener('click', function(evt){
	var target = evt.target;
	if (target.id === '1' ) {
		$("#witsymp").show;
		$("#quitmet").hide;
	}
	else{
		$("#witsymp").hide;
		$("#quitmet").show;
	}
});	
*/


	






$(".submit_answer").on("click", function(event) {
	window.location.href="activity6.2.html";
});