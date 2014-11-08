$(document).ready(function() {
 
 $("#skjol").css("border-bottom", "thick solid #bdbdbd");
 
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
  
  var greinar = new Array();
  greinar[0] = document.getElementById("g1");
  greinar[1] = document.getElementById("g2");
  greinar[2] = document.getElementById("g3");
  greinar[3] = document.getElementById("g4");
  greinar[4] = document.getElementById("g5");
  greinar[5] = document.getElementById("g6");
  greinar[6] = document.getElementById("g7");
  greinar[7] = document.getElementById("g8");
  greinar[8] = document.getElementById("g9");
  greinar[9] = document.getElementById("g10");
  greinar[10] = document.getElementById("g11");
  greinar[11] = document.getElementById("g12");
  greinar[12] = document.getElementById("g13");
  greinar[13] = document.getElementById("g14");
  greinar[14] = document.getElementById("g15");
  greinar[15] = document.getElementById("g16");
  greinar[16] = document.getElementById("g17");
  greinar[17] = document.getElementById("g18");
  greinar[18] = document.getElementById("g19");
  greinar[19] = document.getElementById("g20");
  greinar[20] = document.getElementById("g21");
  greinar[21] = document.getElementById("g22");
  greinar[22] = document.getElementById("g23");
  greinar[23] = document.getElementById("g24");
  greinar[24] = document.getElementById("g25");
  greinar[25] = document.getElementById("g26");
  greinar[26] = document.getElementById("g27");
  
  var greinamyndir = new Array();
  greinamyndir[0] = new Image();
  greinamyndir[0].src = "img/preview/aettartal.jpg";
  greinamyndir[1] = new Image();
  greinamyndir[1].src = "img/preview/bein.jpg";
  greinamyndir[2] = new Image();
  greinamyndir[2].src = "img/preview/fjarvistir.jpg";
  greinamyndir[3] = new Image();
  greinamyndir[3].src = "img/preview/fusi.jpg";
  greinamyndir[4] = new Image();
  greinamyndir[4].src = "img/preview/gunnar_prestur.jpg";
  greinamyndir[5] = new Image();
  greinamyndir[5].src = "img/preview/hleskogar.jpg";
  greinamyndir[6] = new Image();
  greinamyndir[6].src = "img/preview/hofrungar.jpg";
  greinamyndir[7] = new Image();
  greinamyndir[7].src = "img/preview/jardafor.jpg";
  greinamyndir[8] = new Image();
  greinamyndir[8].src = "img/preview/leiklist.jpg";
  greinamyndir[9] = new Image();
  greinamyndir[9].src = "img/preview/olafur_prestur.jpg";
  greinamyndir[10] = new Image();
  greinamyndir[10].src = "img/preview/oli_gunn.jpg";
  greinamyndir[11] = new Image();
  greinamyndir[11].src = "img/preview/skipaskadi.jpg";
  greinamyndir[12] = new Image();
  greinamyndir[12].src = "img/preview/til_solu.jpg";
  greinamyndir[13] = new Image();
  greinamyndir[13].src = "img/preview/verslun.jpg";
  greinamyndir[14] = new Image();
  greinamyndir[14].src = "img/preview/byggd.jpg";
  greinamyndir[15] = new Image();
  greinamyndir[15].src = "img/preview/baldvin_gunnarsson.jpg";
  greinamyndir[16] = new Image();
  greinamyndir[16].src = "img/preview/bjorn_gunnarsson.jpg";
  greinamyndir[17] = new Image();
  greinamyndir[17].src = "img/preview/danartilkynning_gunnar_olafsson.jpg";
  greinamyndir[18] = new Image();
  greinamyndir[18].src = "img/preview/ferd_til_grimseyjar.jpg";
  greinamyndir[19] = new Image();
  greinamyndir[19].src = "img/preview/gudridur.jpg";
  greinamyndir[20] = new Image();
  greinamyndir[20].src = "img/preview/gunnar_olafsson_prestur.jpg";
  greinamyndir[21] = new Image();
  greinamyndir[21].src = "img/preview/halldora_latin.jpg";
  greinamyndir[22] = new Image();
  greinamyndir[22].src = "img/preview/laeknir_kljastrond.jpg";
  greinamyndir[23] = new Image();
  greinamyndir[23].src = "img/preview/minning_sigrun.jpg";
  greinamyndir[24] = new Image();
  greinamyndir[24].src = "img/preview/rosa.jpg";
  greinamyndir[25] = new Image();
  greinamyndir[25].src = "img/preview/theodor.jpg";
  greinamyndir[26] = new Image();
  greinamyndir[26].src = "img/preview/velbatar.jpg";
  
  var greinatextielement = new Array();
  greinatextielement[0] = document.getElementById("gn1");
  greinatextielement[1] = document.getElementById("gn2");
  greinatextielement[2] = document.getElementById("gn3");
  greinatextielement[3] = document.getElementById("gn4");
  greinatextielement[4] = document.getElementById("gn5");
  greinatextielement[5] = document.getElementById("gn6");
  greinatextielement[6] = document.getElementById("gn7");
  greinatextielement[7] = document.getElementById("gn8");
  greinatextielement[8] = document.getElementById("gn9");
  greinatextielement[9] = document.getElementById("gn10");
  greinatextielement[10] = document.getElementById("gn11");
  greinatextielement[11] = document.getElementById("gn12");
  greinatextielement[12] = document.getElementById("gn13");
  greinatextielement[13] = document.getElementById("gn14");
  greinatextielement[14] = document.getElementById("gn15");
  greinatextielement[15] = document.getElementById("gn16");
  greinatextielement[16] = document.getElementById("gn17");
  greinatextielement[17] = document.getElementById("gn18");
  greinatextielement[18] = document.getElementById("gn19");
  greinatextielement[19] = document.getElementById("gn20");
  greinatextielement[20] = document.getElementById("gn21");
  greinatextielement[21] = document.getElementById("gn22");
  greinatextielement[22] = document.getElementById("gn23");
  greinatextielement[23] = document.getElementById("gn24");
  greinatextielement[24] = document.getElementById("gn25");
  greinatextielement[25] = document.getElementById("gn26");
  greinatextielement[26] = document.getElementById("gn27");
  
  var greinatexti = new Array();
  greinatexti[0] = "Niðjatal Gunnars Ólafs Gunnarssonar";
  greinatexti[1] = "Fjölskylduveldi í Höfða og Kljáströnd";
  greinatexti[2] = "Hálfrar aldar fjarvistir Kljástrendings";
  greinatexti[3] = "Viðtal við Vigfús Vigfússon";
  greinatexti[4] = "Gunnar Prestur í Höfða lætur af embætti";
  greinatexti[5] = "Skóli í Hléskógum";
  greinatexti[6] = "Höfrungar við Kljáströnd";
  greinatexti[7] = "Jarðaför Gunnars Gunnarssonar";
  greinatexti[8] = "Leiklist á Kljáströnd";
  greinatexti[9] = "Ólafur prestur Þorleifsson";
  greinatexti[10] = "Ólafur Gunnarsson siglir utan";
  greinatexti[11] = "Skipaskaði á Kljáströnd";
  greinatexti[12] = "Höfði til sölu";
  greinatexti[13] = "Kljástrandarverslunin";
  greinatexti[14] = "Byggðaþróun í Höfðahverfi";
  greinatexti[15] = "Baldvin Gunnarsson";
  greinatexti[16] = "Björn Gunnarsson";
  greinatexti[17] = "Dánartilkynnig Gunnar Ólafsson prestur";
  greinatexti[18] = "Ferð til Grímseyjar";
  greinatexti[19] = "Guðríður";
  greinatexti[20] = "Gunnar Ólafsson fyrsti prestur á Grenivík";
  greinatexti[21] = "Halldóra Halldórsdóttir látin 1921";
  greinatexti[22] = "Læknir sest að á Kljáströnd";
  greinatexti[23] = "Minning Sigrún í Höfða";
  greinatexti[24] = "Rósa Vigfúsdóttir";
  greinatexti[25] = "Theódór Friðriksson";
  greinatexti[26] = "Fyrstu vélbátar til Eyjafjarðar";
  
  var greinadagsetningelement = new Array();
  greinadagsetningelement[0] = document.getElementById("gd1");
  greinadagsetningelement[1] = document.getElementById("gd2");
  greinadagsetningelement[2] = document.getElementById("gd3");
  greinadagsetningelement[3] = document.getElementById("gd4");
  greinadagsetningelement[4] = document.getElementById("gd5");
  greinadagsetningelement[5] = document.getElementById("gd6");
  greinadagsetningelement[6] = document.getElementById("gd7");
  greinadagsetningelement[7] = document.getElementById("gd8");
  greinadagsetningelement[8] = document.getElementById("gd9");
  greinadagsetningelement[9] = document.getElementById("gd10");
  greinadagsetningelement[10] = document.getElementById("gd11");
  greinadagsetningelement[11] = document.getElementById("gd12");
  greinadagsetningelement[12] = document.getElementById("gd13");
  greinadagsetningelement[13] = document.getElementById("gd14");
  greinadagsetningelement[14] = document.getElementById("gd15");
  greinadagsetningelement[15] = document.getElementById("gd16");
  greinadagsetningelement[16] = document.getElementById("gd17");
  greinadagsetningelement[17] = document.getElementById("gd18");
  greinadagsetningelement[18] = document.getElementById("gd19");
  greinadagsetningelement[19] = document.getElementById("gd20");
  greinadagsetningelement[20] = document.getElementById("gd21");
  greinadagsetningelement[21] = document.getElementById("gd22");
  greinadagsetningelement[22] = document.getElementById("gd23");
  greinadagsetningelement[23] = document.getElementById("gd24");
  greinadagsetningelement[24] = document.getElementById("gd25");
  greinadagsetningelement[25] = document.getElementById("gd26");
  greinadagsetningelement[26] = document.getElementById("gd27");
  
  var greinadagsetning = new Array();
  greinadagsetning[0] = "Annað";
  greinadagsetning[1] = "Björn Ingólfsson";
  greinadagsetning[2] = "25.06.1958";
  greinadagsetning[3] = "18.10.1963";
  greinadagsetning[4] = "01.03.1892";
  greinadagsetning[5] = "29.04.1945";
  greinadagsetning[6] = "13.04.1918";
  greinadagsetning[7] = "18.02.1874";
  greinadagsetning[8] = "11.03.1980";
  greinadagsetning[9] = "15.03.1867";
  greinadagsetning[10] = "08.12.1934";
  greinadagsetning[11] = "17.10.1914";
  greinadagsetning[12] = "08.12.1934";
  greinadagsetning[13] = "Björn Ingólfsson";
  greinadagsetning[14] = "Annað";
  greinadagsetning[15] = "01.07.1925";
  greinadagsetning[16] = "06.10.1955";
  greinadagsetning[17] = "26.07.1901";
  greinadagsetning[18] = "22.12.1939";
  greinadagsetning[19] = "01.07.1931";
  greinadagsetning[20] = "28.11.1986";
  greinadagsetning[21] = "05.11.1921";
  greinadagsetning[22] = "08.12.1934";
  greinadagsetning[23] = "25.01.1990";
  greinadagsetning[24] = "03.03.1927";
  greinadagsetning[25] = "1944";
  greinadagsetning[26] = "30.05.1956";
  
  var linkarelement = new Array();
  linkarelement[0] = document.getElementById("gl1");
  linkarelement[1] = document.getElementById("gl2");
  linkarelement[2] = document.getElementById("gl3");
  linkarelement[3] = document.getElementById("gl4");
  linkarelement[4] = document.getElementById("gl5");
  linkarelement[5] = document.getElementById("gl6");
  linkarelement[6] = document.getElementById("gl7");
  linkarelement[7] = document.getElementById("gl8");
  linkarelement[8] = document.getElementById("gl9");
  linkarelement[9] = document.getElementById("gl10");
  linkarelement[10] = document.getElementById("gl11");
  linkarelement[11] = document.getElementById("gl12");
  linkarelement[12] = document.getElementById("gl13");
  linkarelement[13] = document.getElementById("gl14");
  linkarelement[14] = document.getElementById("gl15");
  linkarelement[15] = document.getElementById("gl16");
  linkarelement[16] = document.getElementById("gl17");
  linkarelement[17] = document.getElementById("gl18");
  linkarelement[18] = document.getElementById("gl19");
  linkarelement[19] = document.getElementById("gl20");
  linkarelement[20] = document.getElementById("gl21");
  linkarelement[21] = document.getElementById("gl22");
  linkarelement[22] = document.getElementById("gl23");
  linkarelement[23] = document.getElementById("gl24");
  linkarelement[24] = document.getElementById("gl25");
  linkarelement[25] = document.getElementById("gl26");
  linkarelement[26] = document.getElementById("gl27");
  
  var linkar = new Array();
  linkar[0] = "pdf/aettartal.pdf";
  linkar[1] = "pdf/bein.pdf";
  linkar[2] = "pdf/fjarvistir.pdf";
  linkar[3] = "pdf/fusi.pdf";
  linkar[4] = "pdf/gunnar_prestur.pdf";
  linkar[5] = "pdf/hleskogar.pdf";
  linkar[6] = "pdf/hofrungar.pdf";
  linkar[7] = "pdf/jardafor.pdf";
  linkar[8] = "pdf/leiklist.pdf";
  linkar[9] = "pdf/olafur_prestur.pdf";
  linkar[10] = "pdf/oli_gunn.pdf";
  linkar[11] = "pdf/skipaskadi.pdf";
  linkar[12] = "pdf/til_solu.pdf";
  linkar[13] = "pdf/verslun.pdf";
  linkar[14] = "pdf/byggd.pdf";
  linkar[15] = "pdf/baldvin_gunnarsson.pdf";
  linkar[16] = "pdf/bjorn_gunnarsson.pdf";
  linkar[17] = "pdf/danartilkynning_gunnar_olafsson.pdf";
  linkar[18] = "pdf/ferd_til_grimseyjar.pdf";
  linkar[19] = "pdf/gudridur.pdf";
  linkar[20] = "pdf/gunnar_olafsson_prestur.pdf";
  linkar[21] = "pdf/halldora_latin.pdf";
  linkar[22] = "pdf/laeknir_kljastrond.pdf";
  linkar[23] = "pdf/minning_sigrun.pdf";
  linkar[24] = "pdf/rosa.pdf";
  linkar[25] = "pdf/theodor.pdf";
  linkar[26] = "pdf/velbatar.pdf";
  
  for(i=0; i<greinar.length; i++) {
  $(greinar[i]).css("background-image", "url(" + greinamyndir[i].src + ")");
  $(greinatextielement[i]).text(greinatexti[i]);
  $(greinadagsetningelement[i]).text(greinadagsetning[i]);
  $(linkarelement[i]).attr("href", linkar[i]);
  }
});