$(document).ready(function() {

  var myndasyning = new Array();
  var myndasyningtexti = new Array();
  
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
  
  $("#next2").click(function() {
    myndateljari++;
    if(myndateljari == myndasyning.length) {
	myndateljari=0;
	}
    document.getElementById("myndarod2").src= myndasyning[myndateljari].src;
	$("#myndatexti").text(myndasyningtexti[myndateljari]);
  });
  
  $("#prev2").click(function() {
    myndateljari--;
    if(myndateljari < 0) {
	myndateljari=(myndasyning.length-1);
	}
    document.getElementById("myndarod2").src= myndasyning[myndateljari].src;
	$("#myndatexti").text(myndasyningtexti[myndateljari]);
    });
});