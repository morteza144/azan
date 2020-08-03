function go() {

    var a = document.getElementById("sele");
	var b = a.options[a.selectedIndex].value;
	// alert(b);
	var c = "https://api.keybit.ir/owghat/?city="+ b +"&showsec=false";

	// 
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	var j = JSON.parse(this.responseText);
	     document.getElementById("azan_sobh").innerHTML ="اذان صبح="+ j.result.azan_sobh;
	     document.getElementById("azan_zohr").innerHTML ="اذان ظهر="+ j.result.azan_zohr;
	     document.getElementById("azan_maghreb").innerHTML ="اذان مغرب="+ j.result.azan_maghreb;
	    }
	  };
	  xhttp.open("GET",c, true);
	  xhttp.send();
	

}