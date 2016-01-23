// JavaScript Document
$(window).load(function() {
	$("#gif").delay(2800).hide(100);
    $("#loader").delay(3000).animate({
        top: +2000
    }, 3000);

});


$(document).on("dragstart", function() {
     return false;
});

$(document).ready(function(){
 $(".closeX").click(function(){
	 $("#aboutPage").fadeOut(1000);
	 $("#contactPage").fadeOut(1000);
	 $("#socialMedia").fadeOut(1000);
 });
});

$(document).ready(function(){
 $("#about").click(function(){
	 if ($(window).width() < 768) {
		 var w = $(window).width()/4;
		 $('#aboutPage').css('top', "0px");
		 $('#aboutPage').css('width', w*4);
		 $('#aboutPage').css('height', w*2);
		 $('#aboutPage').css('left', "0px");
		 $("#aboutPage").fadeToggle("slow", "linear");
		 }
	 else if ($(window).width() >= 768 && $(window).width() < 992 ){
		  var w1 = $(window).width()/6;
		 $('#aboutPage').css('top', w1);
		 $('#aboutPage').css('height', w1*2);
		 $('#aboutPage').css('width', w1*4);
		 $('#aboutPage').css('left', w1);
		 $("#aboutPage").fadeToggle("slow", "linear");
		 }
	
		 
	 else if ($(window).width() >= 992) {
		  var w2 = $(window).width()/12;
		 $('#aboutPage').css('top', w2*1);
		 $('#aboutPage').css('height', w2*2);
		 $('#aboutPage').css('width', w2*4);
		 $('#aboutPage').css('left', w2*4);
		 
		 $("#aboutPage").fadeToggle("slow", "linear");
		 
		
		 }
 });
});

$(document).ready(function(){
 $(window).resize(function() {
	
		 
		 if ($(window).width() >= 768 && $(window).width() < 992 ){
		  var w1 = $(window).width()/6;
		 $('#aboutPage').css('top', w1);
		 $('#aboutPage').css('height', w1*2);
		 $('#aboutPage').css('width', w1*4);
		 $('#aboutPage').css('left', w1);
		 $('#contactPage').css('top', w1);
		 $('#contactPage').css('height', w1*2);
		 $('#contactPage').css('width', w1*3);
		 $('#contactPage').css('left', w1*2);
		 $('#socialMedia').css('top', "0px");
		 $('#socialMedia').css('height', w1*3);
		 $('#socialMedia').css('width', w1*1);
		 $('#socialMedia').css('left', "0px");
		 
		 }
		else if ($(window).width() >= 992) {
		  var w2 = $(window).width()/12; 
		 $('#aboutPage').css('top', w2*1);
		 $('#aboutPage').css('height', w2*2);
		 $('#aboutPage').css('width', w2*4);
		 $('#aboutPage').css('left', w2*4);
		 $('#contactPage').css('top', w2*1);
		 $('#contactPage').css('height', w2*2);
		 $('#contactPage').css('width', w2*3);
		 $('#contactPage').css('left', w2*5);
		 $('#socialMedia').css('top', w2*1);
		 $('#socialMedia').css('height', w2*3);
		 $('#socialMedia').css('width', w2*1);
		 $('#socialMedia').css('left', w2*3);
		}
		else if ($(window).width() < 768) {
		 var w = $(window).width()/4;
		 $('#aboutPage').css('top', "0px");
		 $('#aboutPage').css('width', w*4);
		 $('#aboutPage').css('height', w*2);
		 $('#aboutPage').css('left', "0px");
		 $('#contactPage').css('top', "0px");
		 $('#contactPage').css('height', w*3);
		 $('#contactPage').css('width', w*3);
		 $('#contactPage').css('left', w);
		 $('#socialMedia').css('top', "0px");
		 $('#socialMedia').css('height', w*3);
		 $('#socialMedia').css('width', w*1);
		 $('#socialMedia').css('left', "0px");
		 }

	 

 });
});

$(document).ready(function(){
	$(".fancybox").click(function(){
		$("#aboutPage").hide();
		$("#contactPage").hide();
		$("#socialMedia").hide();
	
	});
});
$(document).ready(function(){
	$("#about").click(function(){
		$("#contactPage").hide();
		$("#socialMedia").hide();
	
	});
});
$(document).ready(function(){
	$("#contact").click(function(){
		$("#aboutPage").hide();
	
	});
});
<!--ABOUT PAGE-->
$(document).ready(function(){
 $("#contact").click(function(){
	 if ($(window).width() < 768) {
		 var w = $(window).width()/4;
		  $('#contactPage').css('top', "0px");
		 $('#contactPage').css('height', w*3);
		 $('#contactPage').css('width', w*3);
		 $('#contactPage').css('left', w);
		 $("#contactPage").fadeToggle("slow", "linear");
		 $('#socialMedia').css('top', "0px");
		 $('#socialMedia').css('height', w*3);
		 $('#socialMedia').css('width', w*1);
		 $('#socialMedia').css('left', "0px");
		 $("#socialMedia").fadeToggle("slow", "linear");
		 }
	 else if ($(window).width() >= 768 && $(window).width() < 992 ){
		  var w1 = $(window).width()/6;
		 $('#contactPage').css('top', w1);
		 $('#contactPage').css('height', w1*2);
		 $('#contactPage').css('width', w1*3);
		 $('#contactPage').css('left', w1*2);
		 $("#contactPage").fadeToggle("slow", "linear");
		 $('#socialMedia').css('top', "0px");
		 $('#socialMedia').css('height', w1*3);
		 $('#socialMedia').css('width', w1*1);
		 $('#socialMedia').css('left', "0px");
		 $("#socialMedia").fadeToggle("slow", "linear");
		 }
	
		 
	 else if ($(window).width() >= 992) {
		  var w2 = $(window).width()/12;
		 $('#contactPage').css('top', w2*1);
		 $('#contactPage').css('height', w2*2);
		 $('#contactPage').css('width', w2*3);
		 $('#contactPage').css('left', w2*5);
		 $("#contactPage").fadeToggle("slow", "linear");
		 $('#socialMedia').css('top', w2*1);
		 $('#socialMedia').css('height', w2*3);
		 $('#socialMedia').css('width', w2*1);
		 $('#socialMedia').css('left', w2*3);
		 $("#socialMedia").fadeToggle("slow", "linear");
		 
		 
		}
 });
});


