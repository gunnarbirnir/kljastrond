$(document).ready(function() {

  var myndasyninglinkur = new Array();
  
  myndasyninglinkur[0] = "mynd1.html";
  myndasyninglinkur[1] = "mynd2.html";
  myndasyninglinkur[2] = "mynd3.html";
  myndasyninglinkur[3] = "mynd4.html";
  myndasyninglinkur[4] = "mynd5.html";
  myndasyninglinkur[5] = "mynd6.html";
  myndasyninglinkur[6] = "mynd7.html";
  myndasyninglinkur[7] = "mynd8.html";
  myndasyninglinkur[8] = "mynd9.html";
  myndasyninglinkur[9] = "mynd10.html";
  myndasyninglinkur[10] = "mynd11.html";
  myndasyninglinkur[11] = "mynd12.html";
  myndasyninglinkur[12] = "mynd13.html";
  myndasyninglinkur[13] = "mynd14.html";
  myndasyninglinkur[14] = "mynd15.html";
  myndasyninglinkur[15] = "mynd16.html";
  myndasyninglinkur[16] = "mynd17.html";
  myndasyninglinkur[17] = "mynd18.html";
  myndasyninglinkur[18] = "mynd19.html";
  myndasyninglinkur[19] = "mynd20.html";
  myndasyninglinkur[20] = "mynd21.html";
  myndasyninglinkur[21] = "mynd22.html";
  myndasyninglinkur[22] = "mynd23.html";
  myndasyninglinkur[23] = "mynd24.html";
  
  $("#next2").click(function() {
    myndateljari++;
    if(myndateljari == myndasyninglinkur.length) {
	myndateljari=0;
	}
    window.location.href = myndasyninglinkur[myndateljari];
  });
  
  $("#prev2").click(function() {
    myndateljari--;
    if(myndateljari < 0) {
	myndateljari=(myndasyning.length-1);
	}
    window.location.href = myndasyninglinkur[myndateljari];
    });
});