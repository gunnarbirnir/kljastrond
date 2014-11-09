$(document).ready(function() {
 
 $("#myndir").css("border-bottom", "thick solid #bdbdbd");

 window.setTimeout(function(){
 var haed1 = ($("#myndatexti").height()) + 60;
 $("#litlarmyndirrammi").css("padding-bottom", haed1);
 }, 1);
 
 window.setInterval(function() {
 haed1 = ($("#myndatexti").height()) + 60;
 $("#litlarmyndirrammi").css("padding-bottom", haed1);
 }, 10);
 
 //Hlutir til ad fela
 $("#vidhengi").hide();
 $("#tenglaor2").hide();
 
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
 
 //Hovereffectar
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
  
  $("#or1").mouseenter(function() {
	$(this).css("opacity", "0.0");
  });
  
  $("#or1").mouseleave(function() {
    $(this).css("opacity", "1.0");
  });
  
  $("#or2").mouseenter(function() {
    $(this).css("opacity", "0.0");
  });
  
  $("#or2").mouseleave(function() {
    $(this).css("opacity", "1.0");
  });

  //Til að skipta um mynd
  var myndasyning = new Array();
  myndasyning[0] = new Image();
  myndasyning[0].src = "img/myndir/1.jpg";
  myndasyning[1] = new Image();
  myndasyning[1].src = "img/myndir/2.jpg";
  myndasyning[2] = new Image();
  myndasyning[2].src = "img/myndir/3.jpg";
  myndasyning[3] = new Image();
  myndasyning[3].src = "img/myndir/4.jpg";
  myndasyning[4] = new Image();
  myndasyning[4].src = "img/myndir/5.jpg";
  myndasyning[5] = new Image();
  myndasyning[5].src = "img/myndir/6.jpg";
  myndasyning[6] = new Image();
  myndasyning[6].src = "img/myndir/7.jpg";
  myndasyning[7] = new Image();
  myndasyning[7].src = "img/myndir/8.jpg";
  myndasyning[8] = new Image();
  myndasyning[8].src = "img/myndir/9.jpg";
  myndasyning[9] = new Image();
  myndasyning[9].src = "img/myndir/10.jpg";
  myndasyning[10] = new Image();
  myndasyning[10].src = "img/myndir/11.jpg";
  myndasyning[11] = new Image();
  myndasyning[11].src = "img/myndir/12.jpg";
  myndasyning[12] = new Image();
  myndasyning[12].src = "img/myndir/13.jpg";
  myndasyning[13] = new Image();
  myndasyning[13].src = "img/myndir/14.jpg";
  myndasyning[14] = new Image();
  myndasyning[14].src = "img/myndir/15.jpg";
  myndasyning[15] = new Image();
  myndasyning[15].src = "img/myndir/16.jpg";
  myndasyning[16] = new Image();
  myndasyning[16].src = "img/myndir/17.jpg";
  myndasyning[17] = new Image();
  myndasyning[17].src = "img/myndir/18.jpg";
  myndasyning[18] = new Image();
  myndasyning[18].src = "img/myndir/19.jpg";
  myndasyning[19] = new Image();
  myndasyning[19].src = "img/myndir/20.jpg";
  myndasyning[20] = new Image();
  myndasyning[20].src = "img/myndir/21.jpg";
  myndasyning[21] = new Image();
  myndasyning[21].src = "img/myndir/22.jpg";
  myndasyning[22] = new Image();
  myndasyning[22].src = "img/myndir/23.jpg";
  myndasyning[23] = new Image();
  myndasyning[23].src = "img/myndir/24.jpg";
  myndasyning[24] = new Image();
  myndasyning[24].src = "img/myndir/25.jpg";
  myndasyning[25] = new Image();
  myndasyning[25].src = "img/myndir/26.jpg";
  myndasyning[26] = new Image();
  myndasyning[26].src = "img/myndir/27.JPG";
  myndasyning[27] = new Image();
  myndasyning[27].src = "img/myndir/28.JPG";
  myndasyning[28] = new Image();
  myndasyning[28].src = "img/myndir/29.JPG";
  myndasyning[29] = new Image();
  myndasyning[29].src = "img/myndir/30.JPG";
  myndasyning[30] = new Image();
  myndasyning[30].src = "img/myndir/31.JPG";
  myndasyning[31] = new Image();
  myndasyning[31].src = "img/myndir/32.JPG";
  myndasyning[32] = new Image();
  myndasyning[32].src = "img/myndir/33.JPG";
  myndasyning[33] = new Image();
  myndasyning[33].src = "img/myndir/34.JPG";
  myndasyning[34] = new Image();
  myndasyning[34].src = "img/myndir/35.JPG";
  myndasyning[35] = new Image();
  myndasyning[35].src = "img/myndir/36.JPG";
  myndasyning[36] = new Image();
  myndasyning[36].src = "img/myndir/37.JPG";
  myndasyning[37] = new Image();
  myndasyning[37].src = "img/myndir/38.JPG";
  myndasyning[38] = new Image();
  myndasyning[38].src = "img/myndir/39.jpg";
  myndasyning[39] = new Image();
  myndasyning[39].src = "img/myndir/40.jpg";

  var myndasyningtexti = new Array();
  myndasyningtexti[0] = "F.v. Soffía Vigfúsdóttir, Anna María Vigfúsdóttir og Þorgerður dóttir Rósu sem var systir Vigfúsar. Rósa bjó lengi á Seyðisfirði.";
  myndasyningtexti[1] = "Ólafur Gunnarsson";
  myndasyningtexti[2] = "Anna María Vigfúsdóttir";
  myndasyningtexti[3] = "Dóra Ólafsdóttir";
  myndasyningtexti[4] = "Baldvin Ólafsson, Gunnar Ólafsson, Árni Ólafsson og Baldvin Ringsted. Aftari röð: Sigurður Ringsted og Vigfús Ólafsson.";
  myndasyningtexti[5] = "Haraldur Ringsted.";
  myndasyningtexti[6] = "Hér eru Haraldur Halldórsson, Gunnar Ólafsson (með hvolpinn) og Baldvin Ólafsson en þá kemur Haraldur Ringsted. Aftastur er Sigurður Ringsted.";
  myndasyningtexti[7] = "Baldvin Ringsted, Kátur og Haraldur Halldórsson.";
  myndasyningtexti[8] = "Árni Ólafsson (t.v.) og Baldvin Ringsted.";
  myndasyningtexti[9] = "F.v. Guðríður, Dóra, Sigurjóna Hallgrímsdóttir og Marsibil (Billa).";
  myndasyningtexti[10] = "Haraldur Ringsted og ungur drengur. Veist þú hver hann er?";
  myndasyningtexti[11] = "Elín Ólafsdóttir og Dóra Ólafsdóttir.";
  myndasyningtexti[12] = "Þuríður Finnsdóttir (Finns Jónssonar), Dóra Ólafsdóttir, Ingibjörg Jónsdóttir. Þuríður og Ingibjörg komu frá Ísafirði.";
  myndasyningtexti[13] = "Hópmynd";
  myndasyningtexti[14] = "Hér má þekkja Elínu Ringsted, Baldvin bróður hennar og Jakobínu Gunnarsdóttur.";
  myndasyningtexti[15] = "Hér má þekkja (f.v.) Ólaf Gunnarsson, Önnu Maríu Vigfúsdóttur, Guðríði Ólafsdóttur, Elínu Ringsted, Guðríði Gunnarsdóttur. Líklega er það Ása sem stendur fremst. Þá má þekkja Baldvin Ringsted fyrir aftan Önnu Maríu (vinstra megin) en hægra megin stendur Árni Ólafsson. Líklega stendur Gunnar Ólafsson fyrir aftan Guðríði systur sína.";
  myndasyningtexti[16] = "Hópmynd";
  myndasyningtexti[17] = "Hópmynd";
  myndasyningtexti[18] = "Líklega er það Jakobína Anna Gunnarsdóttir sem er t.h. Hina þekkjum við ekki. Veistu þú meira?";
  myndasyningtexti[19] = "Erfitt er að þekkja þetta fólk - en líklega er Vigfús Ólafsson lengst til hægri.";
  myndasyningtexti[20] = "Par";
  myndasyningtexti[21] = "Hér má þekkja Önnu Pálinu Halldórsdóttur, Vigfús, Harald Ringsted, Sigurð Ringsted. Í aftari röð eru Gunnar Ólafsson, Haraldur Halldórsson, Guðríður Ólafsdóttir og bróðir hennar Baldvin. Ungur með með derhúfu og hönd á hné er Baldvin Ringsted.";
  myndasyningtexti[22] = "Búbba og Mummi";
  myndasyningtexti[23] = "Hér má sjá Gunnar Ólafsson og hundinn Kát. Í baksýn er túnið í Sigtúnum. Tv. eru kartöflugarðar. Húsið t.v. var í eigu Steingríms og Önnu - og að sögn DÓ hét það land.";
  myndasyningtexti[24] = "Anna María og Ólafur í Svarðagröfunum";
  myndasyningtexti[25] = "Gunnur Ólafsdóttir";
  myndasyningtexti[26] = "Höfði";
  myndasyningtexti[27] = "Þóra Soffía og Lauga í Vallholti vinkona hennar";
  myndasyningtexti[28] = "Elín Ringsted, Ella.";
  myndasyningtexti[29] = "Mæðgur. Dóra og Ása";
  myndasyningtexti[30] = "Ása og Þóra Soffía";
  myndasyningtexti[31] = "Ása";
  myndasyningtexti[32] = "Ása og Þóra Soffía";
  myndasyningtexti[33] = "Búbba, Ella, Ása og Þóra Soffía";
  myndasyningtexti[34] = "Björn í Höfða";
  myndasyningtexti[35] = "Óþekkt";
  myndasyningtexti[36] = "Sigtún";
  myndasyningtexti[37] = "Sigtún";
  myndasyningtexti[38] = "Sigtún";
  myndasyningtexti[39] = "Þóra Soffía ung";
  
  var litlarmyndir = new Array();
  litlarmyndir[0] = document.getElementById("litilmynd1");
  litlarmyndir[1] = document.getElementById("litilmynd2");
  litlarmyndir[2] = document.getElementById("litilmynd3");
  litlarmyndir[3] = document.getElementById("litilmynd4");
  litlarmyndir[4] = document.getElementById("litilmynd5");
  litlarmyndir[5] = document.getElementById("litilmynd6");
  litlarmyndir[6] = document.getElementById("litilmynd7");
  litlarmyndir[7] = document.getElementById("litilmynd8");
  litlarmyndir[8] = document.getElementById("litilmynd9");
  litlarmyndir[9] = document.getElementById("litilmynd10");
  litlarmyndir[10] = document.getElementById("litilmynd11");
  litlarmyndir[11] = document.getElementById("litilmynd12");
  litlarmyndir[12] = document.getElementById("litilmynd13");
  litlarmyndir[13] = document.getElementById("litilmynd14");
  litlarmyndir[14] = document.getElementById("litilmynd15");
  litlarmyndir[15] = document.getElementById("litilmynd16");
  litlarmyndir[16] = document.getElementById("litilmynd17");
  litlarmyndir[17] = document.getElementById("litilmynd18");
  litlarmyndir[18] = document.getElementById("litilmynd19");
  litlarmyndir[19] = document.getElementById("litilmynd20");
  litlarmyndir[20] = document.getElementById("litilmynd21");
  litlarmyndir[21] = document.getElementById("litilmynd22");
  litlarmyndir[22] = document.getElementById("litilmynd23");
  litlarmyndir[23] = document.getElementById("litilmynd24");  
  litlarmyndir[24] = document.getElementById("litilmynd25"); 
  litlarmyndir[25] = document.getElementById("litilmynd26"); 
  litlarmyndir[26] = document.getElementById("litilmynd27"); 
  litlarmyndir[27] = document.getElementById("litilmynd28"); 
  litlarmyndir[28] = document.getElementById("litilmynd29"); 
  litlarmyndir[29] = document.getElementById("litilmynd30"); 
  litlarmyndir[30] = document.getElementById("litilmynd31"); 
  litlarmyndir[31] = document.getElementById("litilmynd32"); 
  litlarmyndir[32] = document.getElementById("litilmynd33"); 
  litlarmyndir[33] = document.getElementById("litilmynd34"); 
  litlarmyndir[34] = document.getElementById("litilmynd35"); 
  litlarmyndir[35] = document.getElementById("litilmynd36"); 
  litlarmyndir[36] = document.getElementById("litilmynd37"); 
  litlarmyndir[37] = document.getElementById("litilmynd38"); 
  litlarmyndir[38] = document.getElementById("litilmynd39"); 
  litlarmyndir[39] = document.getElementById("litilmynd40"); 
  
  var litlarm = new Array();
  litlarm[0] = document.getElementById("litilm1");
  litlarm[1] = document.getElementById("litilm2");
  litlarm[2] = document.getElementById("litilm3");
  litlarm[3] = document.getElementById("litilm4");
  litlarm[4] = document.getElementById("litilm5");
  litlarm[5] = document.getElementById("litilm6");
  litlarm[6] = document.getElementById("litilm7");
  litlarm[7] = document.getElementById("litilm8");
  litlarm[8] = document.getElementById("litilm9");
  litlarm[9] = document.getElementById("litilm10");
  litlarm[10] = document.getElementById("litilm11");
  litlarm[11] = document.getElementById("litilm12");
  litlarm[12] = document.getElementById("litilm13");
  litlarm[13] = document.getElementById("litilm14");
  litlarm[14] = document.getElementById("litilm15");
  litlarm[15] = document.getElementById("litilm16");
  litlarm[16] = document.getElementById("litilm17");
  litlarm[17] = document.getElementById("litilm18");
  litlarm[18] = document.getElementById("litilm19");
  litlarm[19] = document.getElementById("litilm20");
  litlarm[20] = document.getElementById("litilm21");
  litlarm[21] = document.getElementById("litilm22");
  litlarm[22] = document.getElementById("litilm23");
  litlarm[23] = document.getElementById("litilm24");
  litlarm[24] = document.getElementById("litilm25");
  litlarm[25] = document.getElementById("litilm26");
  litlarm[26] = document.getElementById("litilm27");
  litlarm[27] = document.getElementById("litilm28");
  litlarm[28] = document.getElementById("litilm29");
  litlarm[29] = document.getElementById("litilm30");
  litlarm[30] = document.getElementById("litilm31");
  litlarm[31] = document.getElementById("litilm32");
  litlarm[32] = document.getElementById("litilm33");
  litlarm[33] = document.getElementById("litilm34");
  litlarm[34] = document.getElementById("litilm35");
  litlarm[35] = document.getElementById("litilm36");
  litlarm[36] = document.getElementById("litilm37");
  litlarm[37] = document.getElementById("litilm38");
  litlarm[38] = document.getElementById("litilm39");
  litlarm[39] = document.getElementById("litilm40");
  
  $(litlarm[0]).css("opacity", "0.0");
  
  var myndateljari = 0;
  
  $("#or2").click(function() {
    $(litlarm[myndateljari]).css("opacity", "0.6");
    myndateljari++;
    if(myndateljari == myndasyning.length) {
	myndateljari=0;
	}
	$("#myndarammi").css("background-image", "url(" + myndasyning[myndateljari].src + ")");
	$("#myndatexti").text(myndasyningtexti[myndateljari]);
	$(litlarm[myndateljari]).css("opacity", "0.0");
  });
  
  $("#or1").click(function() {
    $(litlarm[myndateljari]).css("opacity", "0.6");
    myndateljari--;
    if(myndateljari < 0) {
	myndateljari=(myndasyning.length-1);
	}
    $("#myndarammi").css("background-image", "url(" + myndasyning[myndateljari].src + ")");
	$("#myndatexti").text(myndasyningtexti[myndateljari]);
	$(litlarm[myndateljari]).css("opacity", "0.0");
  });
  
  for(i=0; i<litlarmyndir.length; i++) {
  $(litlarmyndir[i]).css("background-image", "url(" + myndasyning[i].src + ")");
  };
  
  $("body").keydown(function(e) {
      if(e.which == 37) { 
      $(litlarm[myndateljari]).css("opacity", "0.6");
      myndateljari--;
      if(myndateljari < 0) {
	  myndateljari=(myndasyning.length-1);
	  }
      $("#myndarammi").css("background-image", "url(" + myndasyning[myndateljari].src + ")");
	  $("#myndatexti").text(myndasyningtexti[myndateljari]);
      $(litlarm[myndateljari]).css("opacity", "0.0");   
      }
      else if(e.which == 39) { 
      $(litlarm[myndateljari]).css("opacity", "0.6");
      myndateljari++;
      if(myndateljari == myndasyning.length) {
	  myndateljari=0;
	  }
	  $("#myndarammi").css("background-image", "url(" + myndasyning[myndateljari].src + ")");
	  $("#myndatexti").text(myndasyningtexti[myndateljari]);
	  $(litlarm[myndateljari]).css("opacity", "0.0");
     }
  });
});