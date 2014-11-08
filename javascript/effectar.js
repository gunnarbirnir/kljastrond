$(document).ready(function() {
 
 $("#heim").css("border-bottom", "thick solid #bdbdbd");
 
 //Til a? athuga skjastaerdina
 var skjabreidd = $(window).width();
 
 //Hlutir til ad fela
 $("#vidhengi").hide();
 $("#tenglaor2").hide();
 $("#blattfb1").hide();
 $("#blattfb2").hide();
 
 //Tenglar
 var orteljari = 0;
 $("#tenglar").click(function() {
 $("#vidhengi").slideToggle(300);
 if((orteljari%2)==0) {
 $("#tenglaor").hide();
 $("#tenglaor2").show();
 orteljari++;
 }
 else if((orteljari%2)!=0) {
 $("#tenglaor2").hide();
 $("#tenglaor").show();
 orteljari++;
 }
 });

 //Covermyndaeffectar
 var covermyndir = new Array();
 covermyndir[0] = document.getElementById("myndasyning1");
 covermyndir[1] = document.getElementById("myndasyning2");
 covermyndir[2] = document.getElementById("myndasyning3");
 covermyndir[3] = document.getElementById("myndasyning4");
 covermyndir[4] = document.getElementById("myndasyning5");
 covermyndir[5] = document.getElementById("myndasyning6");
 
 var teljari = covermyndir.length - 1;
 
 var i = Math.floor(Math.random() * (covermyndir.length));
 var myndateljari = 0;
 
 for(j=1; j<(i+1); j++) {
 myndateljari = i - j;
 $(covermyndir[myndateljari]).hide();
 }
 
 window.setInterval(function(){
 if(i!=teljari) {
 $(covermyndir[i]).fadeOut(2500);
 i++;
 }
 else if(i==teljari) {
 $(covermyndir[0]).fadeIn(2500);
 window.setTimeout(function(){
   for(j=1; j<teljari; j++) {
     $(covermyndir[j]).show();
   } }, 3000);
 i = 0;
 } }, 10000);
 
 //Forsidumyndarandom
 var forsidumyndir = Math.floor((Math.random() * 5)+1);
 
 if(forsidumyndir==1) {
 $("#forsidumyndir").css("background-image", "url(img/myndir/forsida/1.jpg)");
 }
 
 else if(forsidumyndir==2) {
 $("#forsidumyndir").css("background-image", "url(img/myndir/forsida/2.jpg)");
 }
 
 else if(forsidumyndir==3) {
 $("#forsidumyndir").css("background-image", "url(img/myndir/forsida/3.jpg)");
 }
 
 else if(forsidumyndir==4) {
 $("#forsidumyndir").css("background-image", "url(img/myndir/forsida/4.jpg)");
 }
 
 else if(forsidumyndir==5) {
 $("#forsidumyndir").css("background-image", "url(img/myndir/forsida/5.jpg)");
 }
 
 //Greinarandom
 var greinarrandom = Math.floor((Math.random() * 5)+1);
 var greinarrandom2 = 0;
 var storgreinarrandom = Math.floor((Math.random() * 2)+1);
 
 while(true) {
 greinarrandom2 = Math.floor((Math.random() * 5)+1);
    if(greinarrandom2 != greinarrandom) {
	break;
 }}
 
 if(storgreinarrandom==1) {
 $("#storforsidugrein1linkur").attr("href", "pdf/bein.pdf");
 $("#storforsidugrein1").css("background-image", "url(img/preview/bein.jpg)");
 $("#storgreinanafn1").text("Fjölskylduveldi í Höfða og Kljáströnd");
 $("#gn23").text("Björn Ingólfsson");
 }
 
 else if(storgreinarrandom==2) {
 $("#storforsidugrein1linkur").attr("href", "pdf/verslun.pdf");
 $("#storforsidugrein1").css("background-image", "url(img/preview/verslun.jpg)");
 $("#storgreinanafn1").text("Kljástrandarverslunin");
 $("#gn23").text("Björn Ingólfsson");
 }
 
 if(greinarrandom==1) {
 $("#grein1linkur").attr("href", "pdf/fjarvistir.pdf");
 $("#forsidugrein1").css("background-image", "url(img/preview/fjarvistir.jpg)");
 $("#greinanafn1").text("Hálfrar aldar fjarvistir Kljástrendings");
 $("#gn21").text("25.06.1958");
 }
 
 else if(greinarrandom==2) {
 $("#grein1linkur").attr("href", "pdf/fusi.pdf");
 $("#forsidugrein1").css("background-image", "url(img/preview/fusi.jpg)");
 $("#greinanafn1").text("Viðtal við Vigfús Vigfússon");
 $("#gn21").text("18.10.1963");
 }
 
 else if(greinarrandom==3) {
 $("#grein1linkur").attr("href", "pdf/hleskogar.pdf");
 $("#forsidugrein1").css("background-image", "url(img/preview/hleskogar.jpg)");
 $("#greinanafn1").text("Skóli í Hléskógum");
 $("#gn21").text("29.04.1945");
 }
 
 else if(greinarrandom==4) {
 $("#grein1linkur").attr("href", "pdf/hofrungar.pdf");
 $("#forsidugrein1").css("background-image", "url(img/preview/hofrungar.jpg)");
 $("#greinanafn1").text("Höfrungar við Kljáströnd");
 $("#gn21").text("13.04.1918");
 }
 
 else if(greinarrandom==5) {
 $("#grein1linkur").attr("href", "pdf/leiklist.pdf");
 $("#forsidugrein1").css("background-image", "url(img/preview/leiklist.jpg)");
 $("#greinanafn1").text("Leiklist á Kljáströnd");
 $("#gn21").text("11.03.1980");
 }
 
 if(greinarrandom2==1) {
 $("#grein2linkur").attr("href", "pdf/fjarvistir.pdf");
 $("#forsidugrein2").css("background-image", "url(img/preview/fjarvistir.jpg)");
 $("#greinanafn2").text("Hálfrar aldar fjarvistir Kljástrendings");
 $("#gn22").text("25.06.1958");
 }
 
 else if(greinarrandom2==2) {
 $("#grein2linkur").attr("href", "pdf/fusi.pdf");
 $("#forsidugrein2").css("background-image", "url(img/preview/fusi.jpg)");
 $("#greinanafn2").text("Viðtal við Vigfús Vigfússon");
 $("#gn22").text("18.10.1963");
 }
 
 else if(greinarrandom2==3) {
 $("#grein2linkur").attr("href", "pdf/hleskogar.pdf");
 $("#forsidugrein2").css("background-image", "url(img/preview/hleskogar.jpg)");
 $("#greinanafn2").text("Skóli í Hléskógum");
 $("#gn22").text("29.04.1945");
 }
 
 else if(greinarrandom2==4) {
 $("#grein2linkur").attr("href", "pdf/hofrungar.pdf");
 $("#forsidugrein2").css("background-image", "url(img/preview/hofrungar.jpg)");
 $("#greinanafn2").text("Höfrungar við Kljáströnd");
 $("#gn22").text("13.04.1918");
 }
 
 else if(greinarrandom2==5) {
 $("#grein2linkur").attr("href", "pdf/leiklist.pdf");
 $("#forsidugrein2").css("background-image", "url(img/preview/leiklist.jpg)");
 $("#greinanafn2").text("Leiklist á Kljáströnd");
 $("#gn22").text("11.03.1980");
 }
 
 //Hovereffectar (finna leid til ad sameina forsidugreinaeffectana(med each))
  
 if(skjabreidd>=800) {
  $("#fleirigreinar").mouseenter(function() {
    $(this).css("background-color", "#ff5a5f");
    $(this).css("border-color", "#ff5a5f");
	$("#fleirigreinarlinkur").css("color", "white");
  });
  }
  
  if(skjabreidd>=800) {
  $("#fleirigreinar").mouseleave(function() {
    $(this).css("background-color", "transparent");
	$(this).css("border-color", "grey");
	$("#fleirigreinarlinkur").css("color", "#565a5c");
  });
  }
 
  if(skjabreidd>=800) {
  $("#fleirimyndir").mouseenter(function() {
    $(this).css("background-color", "#0099f1");
    $(this).css("border-color", "#0099f1");
  });
  }
  
  if(skjabreidd>=800) {
  $("#fleirimyndir").mouseleave(function() {
    $(this).css("background-color", "transparent");
    $(this).css("border-color", "white");
  });
  }
  
  $(".linkar1").mouseenter(function() {
    $(this).css("color", "white");
  });
  
  $(".linkar1").mouseleave(function() {
    $(this).css("color", "#bdbdbd");
  });
  
  $(".vh2").mouseenter(function() {
    $(this).css("background-color", "#9de8bb");
  });
  
  $(".vh2").mouseleave(function() {
    $(this).css("background-color", "white");
  });
  
  $("#umsjonmyndpabbi").mouseenter(function() {
    $(this).css("opacity", "0.85");
  });
  
  $("#umsjonmyndpabbi").mouseleave(function() {
    $(this).css("opacity", "1.0");
  });
  
  $("#umsjonmyndeg").mouseenter(function() {
    $(this).css("opacity", "0.85");
  });
  
  $("#umsjonmyndeg").mouseleave(function() {
    $(this).css("opacity", "1.0");
  });
});