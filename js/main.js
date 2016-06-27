$(document).ready(function(){
	
	
	$( window ).scroll(function() {
		
		var elem = document.getElementById('content');
//		alert('top = ' + elem.offsetTop +
//			  '\nleft = ' + elem.offsetLeft);		
//	  	console.log('scrolling!!');
		var scroll = $(window).scrollTop();
	  	console.log(scroll);
		if(scroll > 400){
			$("#tracking").css('top', '15px');
		}else{
			$("#tracking").css('top', '0px');
		}
	});
	
});