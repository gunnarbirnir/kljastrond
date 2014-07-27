$(document).ready(function() {

  var teljari = Math.floor((Math.random() * 5) + 1);
  
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
  $("#nav3").hide();
 	
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
  
  $("#next2").mouseenter(function() {
    $(this).css("opacity","1.0");
  });
  
  $("#next2").mouseleave(function() {
    $(this).css("opacity","0.5");
  });
  
  $("#prev2").mouseenter(function() {
    $(this).css("opacity","1.0");
  });
  
  $("#prev2").mouseleave(function() {
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

  $("#heima").click(function() {
    $("#nav2").slideUp(0);
  });
  
  $("#myndir").click(function() {
    $("#nav2").slideUp(0);
  });
  
  $("#tenglar2").click(function() {
    $("#nav3").slideToggle(400);
  });

  $("#heima").click(function() {
    $("#nav3").slideUp(0);
  });
  
  $("#myndir").click(function() {
    $("#nav3").slideUp(0);
  });
  
  $(".linkar2").mouseenter(function() {
    $(this).css("background-color", "#e9e9e9");
  });
  
  $(".linkar2").mouseleave(function() {
    $(this).css("background-color", "white");
  });

  $(".einn").mouseenter(function() {
    $(this).css("border", "solid #059ac8");
  });
  
  $(".einn").mouseleave(function() {
    $(this).css("border", "solid #8b8b8b");
  });
  
  $(".tveir").mouseenter(function() {
    $(this).css("border", "solid #059ac8");
  });
  
  $(".tveir").mouseleave(function() {
    $(this).css("border", "solid #8b8b8b");
  });
  
  $(".þrir").mouseenter(function() {
    $(this).css("border", "solid #059ac8");
  });
  
  $(".þrir").mouseleave(function() {
    $(this).css("border", "solid #8b8b8b");
  });
  
  $(".fjorir").mouseenter(function() {
    $(this).css("border", "solid #059ac8");
  });
  
  $(".fjorir").mouseleave(function() {
    $(this).css("border", "solid #8b8b8b");
  });
  
  $(".fimm").mouseenter(function() {
    $(this).css("border", "solid #059ac8");
  });
  
  $(".fimm").mouseleave(function() {
    $(this).css("border", "solid #8b8b8b");
  });
  
  $(".sex").mouseenter(function() {
    $(this).css("border", "solid #059ac8");
  });
  
  $(".sex").mouseleave(function() {
    $(this).css("border", "solid #8b8b8b");
  });
  
  $(".sjo").mouseenter(function() {
    $(this).css("border", "solid #059ac8");
  });
  
  $(".sjo").mouseleave(function() {
    $(this).css("border", "solid #8b8b8b");
  });
  
  $(".atta").mouseenter(function() {
    $(this).css("border", "solid #059ac8");
  });
  
  $(".atta").mouseleave(function() {
    $(this).css("border", "solid #8b8b8b");
  });
  
  $(".niu").mouseenter(function() {
    $(this).css("border", "solid #059ac8");
  });
  
  $(".niu").mouseleave(function() {
    $(this).css("border", "solid #8b8b8b");
  });
  
  $(".tiu").mouseenter(function() {
    $(this).css("border", "solid #059ac8");
  });
  
  $(".tiu").mouseleave(function() {
    $(this).css("border", "solid #8b8b8b");
  });
  
  $(".ellefu").mouseenter(function() {
    $(this).css("border", "solid #059ac8");
  });
  
  $(".ellefu").mouseleave(function() {
    $(this).css("border", "solid #8b8b8b");
  });
  
  $("#bein").mouseenter(function() {
    $(this).css("border", "solid #059ac8");
  });
  
  $("#bein").mouseleave(function() {
    $(this).css("border", "solid #8b8b8b");
  });
  
  $("#bein2").mouseenter(function() {
    $(this).css("border", "solid #059ac8");
  });
  
  $("#bein2").mouseleave(function() {
    $(this).css("border", "solid #8b8b8b");
  });
});