window.onload = function() { init() };

	var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1sOXDgCHvi2W-ahxzNX_QEHN7E9mINp-nhzY0U6otTMs/pubhtml';
	// var previousIndex = -1;

	function init() {
		commentData = Tabletop.init({ key: public_spreadsheet_url, callback:function(data) {console.log(data); getBackground(data)}, simpleSheet: true })
	}

	function getBackground(data) {

		console.log("hello");
		var obj = data[0];
		console.log("hello");
		console.log(obj);

		var backgroundimg = "http://2.bp.blogspot.com/-knTy4p1EzBc/UPklxcaDheI/AAAAAAAAGwY/DvLlHMIl-Z4/s1600/2013+India+Gate+hd+wallpaper+Wallpaper.jpg";
		var myDiv = document.getElementById("main");
		document.body.style.backgroundImage = "url('" + backgroundimg + "')";

		if (obj["Remark"] == 3) {
			
			// var imagenames=new Array('<a href="http://bit.ly/1nQuQcW">Port Campbell</a>','<a href="http://bit.ly/1gpOwA5">Opera House </a>','<a href="http://bit.ly/1fRBhSQ">White Haven Beach</a>','<a href="http://bit.ly/Q4aspW">Pinnacles, Nambung National Park</a>','<a href="http://bit.ly/1dn6fbo">Lake Mungo</a>','<a href="http://bit.ly/1f6rglo">12 Apostles </a>','<a href="http://bit.ly/1gNgpwr">Broken Hill</a>');
			
			myDiv.innerHTML = "<center><h1><font color='white'>New Delhi</font></h1><center><br>";
			myDiv.innerHTML += "<center><h1><font color='white'>High Pollution <i class='fa fa-frown-o fa-2x'></i></font></h1></center>";
			//myDiv.innerHTML += 		
		}

		else if (obj["Remark"] == 1) {

			myDiv.innerHTML = "<center><h1><font color='white'>New Delhi</font></h1><center><br>";
			myDiv.innerHTML += "<center><h1><font color='white'>Fresh Air :)</font></h1></center>";
		}
	    
	} 