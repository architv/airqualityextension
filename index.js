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

		if (obj["Remark"] == 3) {
			var backgroundimg = "http://2.bp.blogspot.com/-knTy4p1EzBc/UPklxcaDheI/AAAAAAAAGwY/DvLlHMIl-Z4/s1600/2013+India+Gate+hd+wallpaper+Wallpaper.jpg";
			// var imagenames=new Array('<a href="http://bit.ly/1nQuQcW">Port Campbell</a>','<a href="http://bit.ly/1gpOwA5">Opera House </a>','<a href="http://bit.ly/1fRBhSQ">White Haven Beach</a>','<a href="http://bit.ly/Q4aspW">Pinnacles, Nambung National Park</a>','<a href="http://bit.ly/1dn6fbo">Lake Mungo</a>','<a href="http://bit.ly/1f6rglo">12 Apostles </a>','<a href="http://bit.ly/1gNgpwr">Broken Hill</a>');
			var myDiv = document.getElementById("main");
			myDiv.innerHTML = "<center><h1><font color='white'>New Delhi</font></h1><center><br>";
			myDiv.innerHTML += "<center><h1><font color='white'>High Pollution :/</font></h1></center>";		
			document.body.style.backgroundImage = "url('" + backgroundimg + "')";
			console.log(myDiv);
		
		}

		else if (obj["Remark"] == 1) {

			var backgroundimg = "http://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/000/858/small/Watertower-free-license-CC0-314x224.jpg?1412709014";
			var myDiv = document.getElementById("main");
			document.getElementById("myDiv").style.margin = "100px 10px 20px 30px";
			myDiv.innerHTML = "<margin-top='20%'><center><h1><font color='white'>New Delhi</font></h1><center><br>";
			myDiv.innerHTML += "<center><h1><font color='white'>Fresh Air :)</font></h1></center>";		
			document.body.style.backgroundImage = "url('" + backgroundimg + "')";
		}
	    // console.log(randNum);
	    // $("#comment").removeClass().html(commentData.data()[index].Comment).addClass('animated flipInX title').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    //   $(this).removeClass().addClass('title');
	    // });
	    // if (commentData.data()[index].Author != "") {
	    // 	$("#credits").html("Suggested by <a href=https://twitter.com/" + commentData.data()[index].Author + ">@" + commentData.data()[index].Author).addClass('animated fadeIn credit').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    //  		$(this).removeClass().addClass('credit');
	    // 	});
	    // } else {
	    // 	$("#credits").html("");
	    // }
	    // console.log("inside getSuggestion");
	} 