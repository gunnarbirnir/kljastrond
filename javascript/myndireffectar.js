$(document).ready(function() {
 
 $("#myndir").css("border-bottom", "thick solid #bdbdbd");

 var haed1 = ($("#myndatexti").height()) + 60;
 
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
  myndasyning[36].src = "img/myndir/37.jpg";
  myndasyning[37] = new Image();
  myndasyning[37].src = "img/myndir/38.JPG";
  myndasyning[38] = new Image();
  myndasyning[38].src = "img/myndir/39.jpg";
  myndasyning[39] = new Image();
  myndasyning[39].src = "img/myndir/40.jpg";
  myndasyning[40] = new Image();
  myndasyning[40].src = "img/myndir/41.jpg";
  myndasyning[41] = new Image();
  myndasyning[41].src = "img/myndir/42.jpg";
  myndasyning[42] = new Image();
  myndasyning[42].src = "img/myndir/43.jpg";
  myndasyning[43] = new Image();
  myndasyning[43].src = "img/myndir/44.jpg";
  myndasyning[44] = new Image();
  myndasyning[44].src = "img/myndir/45.jpg";
  myndasyning[45] = new Image();
  myndasyning[45].src = "img/myndir/46.jpg";
  myndasyning[46] = new Image();
  myndasyning[46].src = "img/myndir/47.JPG";
  myndasyning[47] = new Image();
  myndasyning[47].src = "img/myndir/48.JPG";
  myndasyning[48] = new Image();
  myndasyning[48].src = "img/myndir/49.JPG";
  myndasyning[49] = new Image();
  myndasyning[49].src = "img/myndir/50.JPG";
  myndasyning[50] = new Image();
  myndasyning[50].src = "img/myndir/51.JPG";
  myndasyning[51] = new Image();
  myndasyning[51].src = "img/myndir/52.JPG";
  myndasyning[52] = new Image();
  myndasyning[52].src = "img/myndir/53.JPG";
  myndasyning[53] = new Image();
  myndasyning[53].src = "img/myndir/54.JPG";
  myndasyning[54] = new Image();
  myndasyning[54].src = "img/myndir/55.JPG";
  myndasyning[55] = new Image();
  myndasyning[55].src = "img/myndir/56.JPG";
  myndasyning[56] = new Image();
  myndasyning[56].src = "img/myndir/57.jpg";
  myndasyning[57] = new Image();
  myndasyning[57].src = "img/myndir/58.JPG";
  myndasyning[58] = new Image();
  myndasyning[58].src = "img/myndir/59.jpg";
  myndasyning[59] = new Image();
  myndasyning[59].src = "img/myndir/60.jpg";
  myndasyning[60] = new Image();
  myndasyning[60].src = "img/myndir/61.jpg";
  myndasyning[61] = new Image();
  myndasyning[61].src = "img/myndir/62.jpg";
  myndasyning[62] = new Image();
  myndasyning[62].src = "img/myndir/63.jpg";
  myndasyning[63] = new Image();
  myndasyning[63].src = "img/myndir/64.jpg";
  myndasyning[64] = new Image();
  myndasyning[64].src = "img/myndir/65.jpg";
  myndasyning[65] = new Image();
  myndasyning[65].src = "img/myndir/66.jpg";
  myndasyning[66] = new Image();
  myndasyning[66].src = "img/myndir/67.JPG";
  myndasyning[67] = new Image();
  myndasyning[67].src = "img/myndir/68.JPG";
  myndasyning[68] = new Image();
  myndasyning[68].src = "img/myndir/69.JPG";
  myndasyning[69] = new Image();
  myndasyning[69].src = "img/myndir/70.JPG";
  myndasyning[70] = new Image();
  myndasyning[70].src = "img/myndir/71.JPG";
  myndasyning[71] = new Image();
  myndasyning[71].src = "img/myndir/72.JPG";
  myndasyning[72] = new Image();
  myndasyning[72].src = "img/myndir/73.JPG";
  myndasyning[73] = new Image();
  myndasyning[73].src = "img/myndir/74.JPG";
  myndasyning[74] = new Image();
  myndasyning[74].src = "img/myndir/75.JPG";
  myndasyning[75] = new Image();
  myndasyning[75].src = "img/myndir/76.JPG";
  myndasyning[76] = new Image();
  myndasyning[76].src = "img/myndir/77.jpg";
  myndasyning[77] = new Image();
  myndasyning[77].src = "img/myndir/78.JPG";
  myndasyning[78] = new Image();
  myndasyning[78].src = "img/myndir/79.jpg";
  myndasyning[79] = new Image();
  myndasyning[79].src = "img/myndir/80.jpg";

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
  myndasyningtexti[40] = "Gunnar Ólafs, Siggi Ring, Haraldur Halldórsson.";
  myndasyningtexti[41] = "Ása, Dóra og Búbba";
  myndasyningtexti[42] = "Marta Baldvinsdóttir á Kljáströnd";
  myndasyningtexti[43] = "Þóra Rósa Vigfúsdóttir ung.";
  myndasyningtexti[44] = "Dóra og Gunnur Ólafsdætur";
  myndasyningtexti[45] = "Stuðningsmenn Magna";
  myndasyningtexti[46] = "Árni læknir og Hrefna kona hans";
  myndasyningtexti[47] = "Baldvin Gunnarsson, eldri";
  myndasyningtexti[48] = "Á sjó";
  myndasyningtexti[49] = "Á sjó";
  myndasyningtexti[50] = "Þórir og Búbba.";
  myndasyningtexti[51] = "Gunnar Ólafsson í meyjafans.";
  myndasyningtexti[52] = "Gunnar Ólafsson, Sigurður Ringsted, Haraldur Halldórsson o.fl.";
  myndasyningtexti[53] = "Baldvin Ringsted, Haraldur Halldórsson og ókunnur maður.";
  myndasyningtexti[54] = "Krakkar á tröppunum á Kljáströnd";
  myndasyningtexti[55] = "Sveitaferð";
  myndasyningtexti[56] = "Búbba og Dóra";
  myndasyningtexti[57] = "Maja og Ágústa, Þessi er tekin á efri hæðinni í Reynivöllum 8, sjálfsagt í fermingarveislu.";
  myndasyningtexti[58] = "Mæðgur, Dóra og Ása.";
  myndasyningtexti[59] = "Fólk í skógarferð.";
  myndasyningtexti[60] = "Kljástrendingar norðan við Önnu Sveinshús. Þarna eru m.a. Ólafur Gunnarsson, Anna María, Vigfús, Dóra Ól. og Dóra hans Vigga o.fl.";
  myndasyningtexti[61] = "Gunnur og Dóra á tröppunum við Sigtún.";
  myndasyningtexti[62] = "Kona með barn.";
  myndasyningtexti[63] = "Þóra Soffía og bræðurnir Gunni og Mummi Haraldssynir";
  myndasyningtexti[64] = "Búbba, Ása, Mummi og Dóra";
  myndasyningtexti[65] = "Systurnar Búbba og Gunnur Ólafsdætur";
  myndasyningtexti[66] = "Dóra Ólafs og vinkona";
  myndasyningtexti[67] = "Stuðningsmenn MagnaFC";
  myndasyningtexti[68] = "Stuðningsmenn";
  myndasyningtexti[69] = "Fólk óþekkt";
  myndasyningtexti[70] = "Marta Baldvinsdóttir";
  myndasyningtexti[71] = "Baldvin bróðir Ólafs og Guðríðar sem dó ungur, lengst til vinstri";
  myndasyningtexti[72] = "Þóra Soffía og Ása";
  myndasyningtexti[73] = "Marta Baldvinsdóttir á Kljáströnd";
  myndasyningtexti[74] = "Þóra Rósa Vigfúsdóttir í hattabúðinni sinni";
  myndasyningtexti[75] = "Pétur";
  myndasyningtexti[76] = "Kljáströnd";
  myndasyningtexti[77] = "Ólafur Gunnarsson við Sigtún";
  myndasyningtexti[78] = "Búbba, Gunnur, Þóra og Ella";
  myndasyningtexti[79] = "Anna, Ása og Þóra";
  
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
  litlarmyndir[40] = document.getElementById("litilmynd41");
  litlarmyndir[41] = document.getElementById("litilmynd42");
  litlarmyndir[42] = document.getElementById("litilmynd43");
  litlarmyndir[43] = document.getElementById("litilmynd44");  
  litlarmyndir[44] = document.getElementById("litilmynd45"); 
  litlarmyndir[45] = document.getElementById("litilmynd46"); 
  litlarmyndir[46] = document.getElementById("litilmynd47"); 
  litlarmyndir[47] = document.getElementById("litilmynd48"); 
  litlarmyndir[48] = document.getElementById("litilmynd49"); 
  litlarmyndir[49] = document.getElementById("litilmynd50"); 
  litlarmyndir[50] = document.getElementById("litilmynd51"); 
  litlarmyndir[51] = document.getElementById("litilmynd52"); 
  litlarmyndir[52] = document.getElementById("litilmynd53"); 
  litlarmyndir[53] = document.getElementById("litilmynd54"); 
  litlarmyndir[54] = document.getElementById("litilmynd55"); 
  litlarmyndir[55] = document.getElementById("litilmynd56"); 
  litlarmyndir[56] = document.getElementById("litilmynd57"); 
  litlarmyndir[57] = document.getElementById("litilmynd58"); 
  litlarmyndir[58] = document.getElementById("litilmynd59"); 
  litlarmyndir[59] = document.getElementById("litilmynd60");
  litlarmyndir[60] = document.getElementById("litilmynd61");
  litlarmyndir[61] = document.getElementById("litilmynd62");
  litlarmyndir[62] = document.getElementById("litilmynd63");
  litlarmyndir[63] = document.getElementById("litilmynd64");  
  litlarmyndir[64] = document.getElementById("litilmynd65"); 
  litlarmyndir[65] = document.getElementById("litilmynd66"); 
  litlarmyndir[66] = document.getElementById("litilmynd67"); 
  litlarmyndir[67] = document.getElementById("litilmynd68"); 
  litlarmyndir[68] = document.getElementById("litilmynd69"); 
  litlarmyndir[69] = document.getElementById("litilmynd70"); 
  litlarmyndir[70] = document.getElementById("litilmynd71"); 
  litlarmyndir[71] = document.getElementById("litilmynd72"); 
  litlarmyndir[72] = document.getElementById("litilmynd73"); 
  litlarmyndir[73] = document.getElementById("litilmynd74"); 
  litlarmyndir[74] = document.getElementById("litilmynd75"); 
  litlarmyndir[75] = document.getElementById("litilmynd76"); 
  litlarmyndir[76] = document.getElementById("litilmynd77"); 
  litlarmyndir[77] = document.getElementById("litilmynd78"); 
  litlarmyndir[78] = document.getElementById("litilmynd79"); 
  litlarmyndir[79] = document.getElementById("litilmynd80");   
  
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
  litlarm[40] = document.getElementById("litilm41");
  litlarm[41] = document.getElementById("litilm42");
  litlarm[42] = document.getElementById("litilm43");
  litlarm[43] = document.getElementById("litilm44");
  litlarm[44] = document.getElementById("litilm45");
  litlarm[45] = document.getElementById("litilm46");
  litlarm[46] = document.getElementById("litilm47");
  litlarm[47] = document.getElementById("litilm48");
  litlarm[48] = document.getElementById("litilm49");
  litlarm[49] = document.getElementById("litilm50");
  litlarm[50] = document.getElementById("litilm51");
  litlarm[51] = document.getElementById("litilm52");
  litlarm[52] = document.getElementById("litilm53");
  litlarm[53] = document.getElementById("litilm54");
  litlarm[54] = document.getElementById("litilm55");
  litlarm[55] = document.getElementById("litilm56");
  litlarm[56] = document.getElementById("litilm57");
  litlarm[57] = document.getElementById("litilm58");
  litlarm[58] = document.getElementById("litilm59");
  litlarm[59] = document.getElementById("litilm60");
  litlarm[60] = document.getElementById("litilm61");
  litlarm[61] = document.getElementById("litilm62");
  litlarm[62] = document.getElementById("litilm63");
  litlarm[63] = document.getElementById("litilm64");
  litlarm[64] = document.getElementById("litilm65");
  litlarm[65] = document.getElementById("litilm66");
  litlarm[66] = document.getElementById("litilm67");
  litlarm[67] = document.getElementById("litilm68");
  litlarm[68] = document.getElementById("litilm69");
  litlarm[69] = document.getElementById("litilm70");
  litlarm[70] = document.getElementById("litilm71");
  litlarm[71] = document.getElementById("litilm72");
  litlarm[72] = document.getElementById("litilm73");
  litlarm[73] = document.getElementById("litilm74");
  litlarm[74] = document.getElementById("litilm75");
  litlarm[75] = document.getElementById("litilm76");
  litlarm[76] = document.getElementById("litilm77");
  litlarm[77] = document.getElementById("litilm78");
  litlarm[78] = document.getElementById("litilm79");
  litlarm[79] = document.getElementById("litilm80");
  
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
  
  $(function(){
  litlarm.forEach(function(mafs, index){
  $(litlarm[index]).click(function() {
  $(litlarm[myndateljari]).css("opacity", "0.6");
  myndateljari = index;
  $(litlarm[index]).css("opacity", "0.0");
  $("#myndarammi").css("background-image", "url(" + myndasyning[myndateljari].src + ")");
  $("#myndatexti").text(myndasyningtexti[myndateljari]);
 })})});
});