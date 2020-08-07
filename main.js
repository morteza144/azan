
function play_azan(){
	var azan_sound_el=document.getElementById("audio");
audio.play();
// 	var audio = new Audio('audio_file.mp3');
// audio.play();
	
}


function flip(){
var s = document.getElementsByClassName("card")[0];
// s.style.width="500px";
s.classList.toggle("mori-flip");
}




function go() {

    var a = document.getElementById("sele");
	var b = a.options[a.selectedIndex].value;
	var c = "https://api.keybit.ir/owghat/?city="+ b;
	// var c = "http://localhost:8000/api/mori";
	// var c = "https://api.keybit.ir/owghat/?city="+ b +"&showsec=false";

	// 
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	var j = JSON.parse(this.responseText);
	     document.getElementById("azan_sobh").innerHTML ="اذان صبح="+ j.result.azan_sobh;
	     document.getElementById("azan_zohr").innerHTML ="اذان ظهر="+ j.result.azan_zohr;
	     document.getElementById("azan_maghreb").innerHTML ="اذان مغرب="+ j.result.azan_maghreb;

	     var sobh_time = j.result.azan_sobh;
	     var zohr_time = j.result.azan_zohr;
	     var magh_time = j.result.azan_maghreb;
 
	     var sobh = sobh_time.split(":");
	     var zohr = zohr_time.split(":");
	     var magh = magh_time.split(":");





	var now = new Date();
	


function dif(bbbb) {
dis =new Date(now.getFullYear(), now.getMonth(), now.getDate(), bbbb[0], bbbb[1], bbbb[2], 0) - now;
	return dis;
}


if(dif(sobh)>0){


		setTimeout(play_azan, dif(sobh));
		setTimeout(play_azan, dif(zohr));
		setTimeout(play_azan, dif(magh));

}
else if(dif(zohr)>0){

		setTimeout(play_azan, dif(zohr));
		setTimeout(play_azan, dif(magh));
}
else {
	if(dif(magh)>0){

		setTimeout(play_azan, parseInt(dif(magh)));
	}
}

flip();


	    }
	  };

	  xhttp.open("GET",c, false);
	  xhttp.send();
}


$(function(){
    $(".flip").flip({
        trigger: 'hover',
        axis: 'x'
    });
});