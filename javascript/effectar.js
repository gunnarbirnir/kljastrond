$(document).ready(function() {

  var teljari = Math.floor(Math.random() * 6) + 1;
  
  if(teljari==1)
	{
    $("#banner").css("background-image","url(img/1.jpg)");
	}
	
	else if(teljari==2)
	{
    $("#banner").css("background-image","url(img/2.jpg)");
	}
	
	else if(teljari==3)
	{
    $("#banner").css("background-image","url(img/3.jpg)");
	}
	
	else if(teljari==4)
	{
    $("#banner").css("background-image","url(img/4.jpg)");
	}
	
	else if(teljari==5)
	{
    $("#banner").css("background-image","url(img/5.jpg)");
	}

  $("#nav2").hide();
 	
  $("#next").click(function() {
    
    if(teljari==1)
	{
    $("#banner").css("background-image","url(img/2.jpg)");
    teljari++;
	}
	
	else if(teljari==2)
	{
    $("#banner").css("background-image","url(img/3.jpg)");
    teljari++;
	}
	
	else if(teljari==3)
	{
    $("#banner").css("background-image","url(img/4.jpg)");
    teljari++;
	}
	
	else if(teljari==4)
	{
    $("#banner").css("background-image","url(img/5.jpg)");
    teljari++;
	}
	
	else if(teljari==5)
	{
    $("#banner").css("background-image","url(img/1.jpg)");
    teljari = 1;
	}
	});
  
  $("#prev").click(function() {
  
    if(teljari==1)
	{
    $("#banner").css("background-image","url(img/5.jpg)");
    teljari= 5;
	}
	
	else if(teljari==2)
	{
    $("#banner").css("background-image","url(img/1.jpg)");
    teljari= 1;
	}
	
	else if(teljari==3)
	{
    $("#banner").css("background-image","url(img/2.jpg)");
    teljari= 2;
	}
	
	else if(teljari==4)
	{
    $("#banner").css("background-image","url(img/3.jpg)");
    teljari = 3;
	}
	
	else if(teljari==5)
	{
    $("#banner").css("background-image","url(img/4.jpg)");
    teljari = 4;
	}
  });
  
  $("#next").mouseenter(function() {
    $(this).css("opacity","1.0");
  });
  
  $("#next").mouseleave(function() {
    $(this).css("opacity","0.5");
  });
  
  $("#prev").mouseenter(function() {
    $(this).css("opacity","1.0");
  });
  
  $("#prev").mouseleave(function() {
    $(this).css("opacity","0.5");
  });
  
  $(".linkar1").mouseenter(function() {
    $(this).css("color","#afd5fc");
  });
  
  $(".linkar1").mouseleave(function() {
    $(this).css("color","white");
  });
  
  $("#tenglar").click(function() {
    $("#nav2").slideToggle(400);
  });
  
  $("#grein").click(function() {
    $("#nav2").slideUp(0);
  });
  
  $("#heima").click(function() {
    $("#nav2").slideUp(400);
  });
  
  $(".linkar2").mouseenter(function() {
    $(this).css("background-color", "#e9e9e9");
  });
  
  $(".linkar2").mouseleave(function() {
    $(this).css("background-color", "white");
  });
  
  $(".einn").mouseenter(function() {
    $(this).css("background-image", "url(img/greinamynd1b.jpg)");
  });
  
  $(".einn").mouseleave(function() {
    $(this).css("background-image","url(img/greinamynd1.jpg)");
  });
  
  $(".tveir").mouseenter(function() {
    $(this).css("background-image", "url(img/greinamynd22.jpg)");
  });
  
  $(".tveir").mouseleave(function() {
    $(this).css("background-image","url(img/greinamynd2.jpg)");
  });
  
  $(".þrir").mouseenter(function() {
    $(this).css("background-image", "url(img/greinamynd33.jpg)");
  });
  
  $(".þrir").mouseleave(function() {
    $(this).css("background-image","url(img/greinamynd3.jpg)");
  });
  
  $(".fjorir").mouseenter(function() {
    $(this).css("background-image", "url(img/greinamynd44.jpg)");
  });
  
  $(".fjorir").mouseleave(function() {
    $(this).css("background-image","url(img/greinamynd4.jpg)");
  });
  
  $(".fimm").mouseenter(function() {
    $(this).css("background-image", "url(img/greinamynd55.jpg)");
  });
  
  $(".fimm").mouseleave(function() {
    $(this).css("background-image","url(img/greinamynd5.jpg)");
  });
  
  $(".sex").mouseenter(function() {
    $(this).css("background-image", "url(img/greinamynd66.jpg)");
  });
  
  $(".sex").mouseleave(function() {
    $(this).css("background-image","url(img/greinamynd6.jpg)");
  });
  
  $(".sjo").mouseenter(function() {
    $(this).css("background-image", "url(img/greinamynd77.jpg)");
  });
  
  $(".sjo").mouseleave(function() {
    $(this).css("background-image","url(img/greinamynd7.jpg)");
  });
  
  $(".atta").mouseenter(function() {
    $(this).css("background-image", "url(img/greinamynd88.jpg)");
  });
  
  $(".atta").mouseleave(function() {
    $(this).css("background-image","url(img/greinamynd8.jpg)");
  });
  
  $(".niu").mouseenter(function() {
    $(this).css("background-image", "url(img/greinamynd99.jpg)");
  });
  
  $(".niu").mouseleave(function() {
    $(this).css("background-image","url(img/greinamynd9.jpg)");
  });
  
  $(".tiu").mouseenter(function() {
    $(this).css("background-image", "url(img/greinamynd1010.jpg)");
  });
  
  $(".tiu").mouseleave(function() {
    $(this).css("background-image","url(img/greinamynd10.jpg)");
  });
  
  $(".ellefu").mouseenter(function() {
    $(this).css("background-image", "url(img/greinamynd1111.jpg)");
  });
  
  $(".ellefu").mouseleave(function() {
    $(this).css("background-image","url(img/greinamynd11.jpg)");
  });
});