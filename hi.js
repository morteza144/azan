var tim ="";

function go() {

    var a = document.getElementById("sele");
	var b = a.options[a.selectedIndex].value;
	// alert(b);
	var c = "https://api.keybit.ir/owghat/?city="+ b;
	// var c = "https://api.keybit.ir/owghat/?city="+ b +"&showsec=false";

	// 
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	var j = JSON.parse(this.responseText);
	     document.getElementById("azan_sobh").innerHTML ="اذان صبح="+ j.result.azan_sobh;
	     document.getElementById("azan_zohr").innerHTML ="اذان ظهر="+ j.result.azan_zohr;
	     document.getElementById("azan_maghreb").innerHTML ="اذان مغرب="+ j.result.azan_maghreb;

	     var as = j.result.azan_sobh;
		// if (as < 0) {
		//      var az=j.result.azan_zohr;
		//      as = az.split(":");
		//      if(az<0){
		//      	var am = j.result.azan_maghreb;
		//      	az= am.split(":");
		//      }
		// }
	     var bb = as.split(":");
	     alert(bb[0]+"-"+bb[1]+"-"+bb[2]);
	     var now = new Date();
		var md = new Date(now.getFullYear(), now.getMonth(), now.getDate(), bb[0], bb[1], bb[2], 0) - now;
		setTimeout(function(){alert("time azan")}, md);
	    alert(md);
	    }
	  };
	  xhttp.open("GET",c, false);
	  xhttp.send();
}

		// var date=new Date();
		// var current_time= date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	 //    tim=j.result.azan_sobh;
		// alert("current_time="+current_time+"and"+"tim="+tim);
