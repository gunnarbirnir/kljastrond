$(document).ready(function() {
   
   //Fade in a logo
   $("#logo").hide().fadeIn(1500);
   
   window.setInterval(function(){
   if(($(window).width())<600){
   $("#logo").hide();
   }
   else if(($(window).width())>600) {
   $("#logo").show();
   } }, 10);
   
   //Fade inn í snjallsímum
   if(($(window).width())<600) {
   var teljari = Math.floor((Math.random() * 1500) + 500);
   $("#heimsimalinkur").hide().fadeIn(teljari);  
   teljari = Math.floor((Math.random() * 1500) + 500);
   $("#greinarsimalinkur").hide().fadeIn(teljari);   
   teljari = Math.floor((Math.random() * 1500) + 500);   
   $("#umfjallanirsimalinkur").hide().fadeIn(teljari);
   teljari = Math.floor((Math.random() * 1500) + 500);
   $("#myndirsimalinkur").hide().fadeIn(teljari);
   teljari = Math.floor((Math.random() * 1500) + 500);   
   $("#umsimalinkur").hide().fadeIn(teljari);      
   }
   
   //Til að myndin fylli út   
   var breidd = $(window).width();
   var haed3 = $(window).height();
   var tala2 = haed3*1.5;
   
   if(breidd>tala2) {
   if(haed3>790 || breidd>1490) {
   $("body").css("background-size", breidd);
   $("body").css("background-position", "center top");
   }}
   
   if(breidd<=tala2) {
   if(haed3>790 || breidd>1490) {
   $("body").css("background-size", tala2);
   $("body").css("background-position", "center top");
   }}
   
   //Til að stilla merkinu upp í miðjuna
   window.setInterval(function(){
   var haed = $(window).height();
   var haed2 = ($("#logo").width())*0.74;
   var tala = (haed - haed2)/2;
   $("#fyrirsogn").css("top", tala);
   }, 10);
   
   //Um síðuna- og tenglatakkar
   $("#vidhengi").hide();
   $("#kassi2").hide();
   var vidhengisteljari = 0;
   
   $("#um").click(function() {
    $("#vidhengi").slideToggle(400);
	$("#vidhengi2").slideUp(200);
	vidhengisteljari++;
   });
   
   window.setInterval(function(){
   if((vidhengisteljari%2)!=0) {
   $("#kassi2").fadeIn(400);
   }
   else if((vidhengisteljari%2)==0) {
   $("#kassi2").fadeOut(400);
   } }, 10);
   
   $("#vidhengi2").hide();
   
   $("#tenglar").click(function() {
    $("#vidhengi2").slideToggle(300);
	if((vidhengisteljari%2)!=0) {
	$("#vidhengi").slideUp(200);
	vidhengisteljari++;
	}
   });
   
   //Umsíðunatakki fyrir snjalltæki
   $("#snjallumsida").hide();
   
   $("#umlinkur").click(function() {
    $("#snjallumsida").slideDown(300);
   });
   
   $("#hus2").click(function() {
    $("#snjallumsida").slideUp(300);
   });
   
   $("#umsimalinkur").click(function() {
    $("#snjallumsida").slideDown(300);
   });
   
   $("#hus").click(function() {
    $("#snjallumsida").slideUp(300);
   });
   
   //Hover effectar
   $(".simalinkar").mouseenter(function() {
    $(this).css("opacity","0.7");
   });
  
   $(".simalinkar").mouseleave(function() {
    $(this).css("opacity","1.0");
   });
  
   $("#tenglar").mouseenter(function() {
    $(this).css("opacity","0.7");
   });
  
   $("#tenglar").mouseleave(function() {
    $(this).css("opacity","1.0");
   });
   
   $("#um").mouseenter(function() {
    $(this).css("opacity","0.7");
   });
  
   $("#um").mouseleave(function() {
    $(this).css("opacity","1.0");
   });
   
   $(".linkar1").mouseenter(function() {
    $(this).css("border-bottom","medium solid white");
   });
  
   $(".linkar1").mouseleave(function() {
    $(this).css("border-bottom","none");
   });
   
   $("#umlinkur").mouseenter(function() {
    $(this).css("opacity","0.7");
   });
  
   $("#umlinkur").mouseleave(function() {
    $(this).css("opacity","1.0");
   });
   
   $("#vh2nr1").mouseenter(function() {
    $("#1vh2").css("background-color","rgba(0,0,0,0.7)");
   });
  
   $("#vh2nr1").mouseleave(function() {
    $("#1vh2").css("background-color","rgba(0,0,0,0.5)");
   });
   
   $("#vh2nr2").mouseenter(function() {
    $("#2vh2").css("background-color","rgba(0,0,0,0.7)");
   });
  
   $("#vh2nr2").mouseleave(function() {
    $("#2vh2").css("background-color","rgba(0,0,0,0.5)");
   });
   
   $("#vh2nr3").mouseenter(function() {
    $("#3vh2").css("background-color","rgba(0,0,0,0.7)");
   });
  
   $("#vh2nr3").mouseleave(function() {
    $("#3vh2").css("background-color","rgba(0,0,0,0.5)");
   });
   
   $("#vh2nr4").mouseenter(function() {
    $("#4vh2").css("background-color","rgba(0,0,0,0.7)");
   });
  
   $("#vh2nr4").mouseleave(function() {
    $("#4vh2").css("background-color","rgba(0,0,0,0.5)");
   });
   
   $("#vh2nr5").mouseenter(function() {
    $("#5vh2").css("background-color","rgba(0,0,0,0.7)");
   });
  
   $("#vh2nr5").mouseleave(function() {
    $("#5vh2").css("background-color","rgba(0,0,0,0.5)");
   });
   
   $("#vh2nr6").mouseenter(function() {
    $("#6vh2").css("background-color","rgba(0,0,0,0.7)");
   });
  
   $("#vh2nr6").mouseleave(function() {
    $("#6vh2").css("background-color","rgba(0,0,0,0.5)");
   });
   
   $("#hus2").mouseenter(function() {
    $(this).css("opacity","0.7");
   });
  
   $("#hus2").mouseleave(function() {
    $(this).css("opacity","1.0");
   });
});