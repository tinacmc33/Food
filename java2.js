$(document).ready(function(){

document.getElementById("author").innerHTML = localStorage.getItem("author");
document.getElementById("des").innerHTML = localStorage.getItem("text");
document.getElementById("title").innerHTML = localStorage.getItem("title");
document.getElementById("links").href= localStorage.getItem("link");
document.getElementById("picture").src= localStorage.getItem("pic");
document.getElementById("musics").src= localStorage.getItem("musics");
document.getElementById("musics2").src= localStorage.getItem("musics2");
document.getElementById("musics3").src= localStorage.getItem("musics3");
document.getElementById("musics4").src= localStorage.getItem("musics4");
document.getElementById("musics5").src= localStorage.getItem("musics5");
document.getElementById("musics6").src= localStorage.getItem("musics6");





 var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1lxGmqmLxVtgG8oDiIVDmQepbizIHDuDlKEAWFsKsMdw/pubhtml';
 Tabletop.init( { key: public_spreadsheet_url, callback: loadDB, simpleSheet: true } );
 
 var bookList = [];
 function loadDB(data, tabletop) {
	//pics = ["#pic", "#pic1", "#pic2", "#pic3"];
	//text = ["#text", "#text1", "#text2", "#text3"];
    for (i = 0; i < data.length; i++) {
		bookList[i] = data[i];
		//$(pics[i]).attr("src", data[i].image); // Image src
		//$("#pic" + i).src = data[i].image;
		//$(text[i]).html(data[i].title); // innerHTML

	}
 };
 
	$("#myButton").click(function() {
		if ($("#searchBar")[0].value.length !== 0) {
			console.log(bookList.length);			// If user enters a string 
			for (j = 0; j < bookList.length; j++) {
				console.log(bookList[j].title);
				console.log($("#searchBar")[0].value);
				if (bookList[j].title === $("#searchBar")[0].value) { // If movie title equals search bar
					//alert("We have this book!");
					pics = ["#pic"];
					text = ["#text"];
					author=["#author"];
					title=["#title"];
					$(pics[0]).attr("src", bookList[j].image); // Image src
					//$("#pic" + i).src = data[i].image;
					localStorage.setItem("pic", (bookList[j].image));
					localStorage.setItem("text", (bookList[j].description));
					localStorage.setItem("author", (bookList[j].author));
					localStorage.setItem("title", (bookList[j].title));
					localStorage.setItem("link", (bookList[j].year));
					console.log(bookList[j].year)
					console.log(bookList[j].genre);
						if (bookList[j].genre==="Romance"){
							console.log("entered if")
							
								localStorage.setItem("musics", (mRomance[0]));
								localStorage.setItem("musics2", (mRomance[1]));
								localStorage.setItem("musics3", (mRomance[2]));
								localStorage.setItem("musics4", (mRomance[3]));
								localStorage.setItem("musics5", (mRomance[4]));
								localStorage.setItem("musics6", (mRomance[5]));
								
								
						}
						else if (bookList[j].genre==="Classics"){
							
								localStorage.setItem("musics", (mClassics[0]));
								localStorage.setItem("musics2", (mClassics[1]));
								localStorage.setItem("musics3", (mClassics[2]));
								localStorage.setItem("musics4", (mClassics[3]));
								localStorage.setItem("musics5", (mClassics[4]));
								localStorage.setItem("musics6", (mClassics[5]));
								
								
						}
						else if (bookList[j].genre==="Adventure"){
							
								localStorage.setItem("musics", (mAdventure[0]));
								localStorage.setItem("musics2", (mAdventure[1]));
								localStorage.setItem("musics3", (mAdventure[2]));
								localStorage.setItem("musics4", (mAdventure[3]));
								localStorage.setItem("musics5", (mAdventure[4]));
								localStorage.setItem("musics6", (mAdventure[5]));
								
								
						}
						else if (bookList[j].genre==="Fantasy"){
								localStorage.setItem("musics", (mFantasy[0]));
								localStorage.setItem("musics2", (mFantasy[1]));
								localStorage.setItem("musics3", (mFantasy[2]));
								localStorage.setItem("musics4", (mFantasy[3]));
								localStorage.setItem("musics5", (mFantasy[4]));
								localStorage.setItem("musics6", (mFantasy[5]));
								
								
						}
						else if (bookList[j].genre==="Mystery"){
							
								localStorage.setItem("musics", (mMystery[0]));
								localStorage.setItem("musics2", (mMystery[1]));
								localStorage.setItem("musics3", (mMystery[2]));
								localStorage.setItem("musics4", (mMystery[3]));
								localStorage.setItem("musics5", (mMystery[4]));
								localStorage.setItem("musics6", (mMystery[5]));
								
								
						}
						else if (bookList[j].genre==="Realistic Fiction"){
							console.log("entered if")
								localStorage.setItem("musics", (mRealfic[0]));
								localStorage.setItem("musics2", (mRealfic[1]));
								localStorage.setItem("musics3", (mRealfic[2]));
								localStorage.setItem("musics4", (mRealfic[3]));
								localStorage.setItem("musics5", (mRealfic[4]));
								localStorage.setItem("musics6", (mRealfic[5]));
						}	 
					return true;
				} 
			}
			alert("Sorry, we don't have this book. Please try again.")
		} else {
			alert("ERROR! You cannot enter nothing. Please try again.");
		}
	});  

 var mMystery= ["https://embed.spotify.com/?uri=spotify:track:11SbsNWpks6s4bSn1NTGbL&view=coverart",
				"https://embed.spotify.com/?uri=spotify:track:617lQVXZpFU0Kw1TTiZJ7t",
				"https://embed.spotify.com/?uri=spotify:track:0zbwP6RpkQIbNkNdUVDw73",
				"https://embed.spotify.com/?uri=spotify:track:0wWJIERM5cOYNtx2Ct4qn8&view=coverart",
				"https://embed.spotify.com/?uri=spotify:track:1UbUOYSuCOrjxiucvcgZvP",
				"https://embed.spotify.com/?uri=spotify:track:6VQLSljd0ZFb6JbJaGaJv3"];
				
 var mRomance=["https://embed.spotify.com/?uri=spotify:track:1ujQIjwvPyf8BxsGVd4Uos",
				"https://embed.spotify.com/?uri=spotify:track:7A66BEh6rBT7Kg26CSnifX",
				"https://embed.spotify.com/?uri=spotify:track:6uKlzgf2ayLVhhLN7oGe9m",
				"https://embed.spotify.com/?uri=spotify:track:06YOBrEh2OSmDfg0KW3gaz",
				"https://embed.spotify.com/?uri=spotify:track:7fgXYQqnxzbAsZYpEDaRLN",
				"https://embed.spotify.com/?uri=spotify:track:1A6x5leo3Cjd0gdxThX5jt"];
				
 var mRealfic=["https://embed.spotify.com/?uri=spotify:album:1wJZSN3VrWTR8OcFJ4lp9I&view=coverart",
				"https://embed.spotify.com/?uri=spotify:track:4McM3GKoC9kVrVJ31en0d5",
				"https://embed.spotify.com/?uri=spotify:track:4KsNLEYOXpnLDRDjSq134U",
				"https://embed.spotify.com/?uri=spotify:track:33vWhXHDGaCdthoyU4fo1T",
				"https://embed.spotify.com/?uri=spotify:track:0Szj95ODgQNYMLc7bE7Mry"
				];
 
 var mAdventure=["https://embed.spotify.com/?uri=spotify:track:5DGMppfciK21OKQfc1xqU2&view=coverart",
				"https://embed.spotify.com/?uri=spotify:track:4eyOdAZS4vxs12QcJSa68v",
				"https://embed.spotify.com/?uri=spotify:track:3uiey9bRX0dd05CdAaxGfH&view=coverart",
				"https://embed.spotify.com/?uri=spotify:track:7zY46aSULMG2pDG2fMlaI7",
				"https://embed.spotify.com/?uri=spotify:track:0VLTz3A54RHH7PzMO1buKx",
				"https://embed.spotify.com/?uri=spotify:track:207Bvb5saweIULXphE94Y8"
				];
				
 var mClassics=["https://embed.spotify.com/?uri=spotify:track:1m0dIj1PvGldkiwJUYzc1l",
				"https://embed.spotify.com/?uri=spotify:track:086sjLPEqdKBgTxbTeCLCv",
				"https://embed.spotify.com/?uri=spotify:track:33z1IWQo66aEJaeD2Z3g7e",
				"https://embed.spotify.com/?uri=spotify:track:2mu2GVYcLEHgkUwPWN6bNl",
				"https://embed.spotify.com/?uri=spotify:track:2BuNvmFyT9VTcwPEF9KLMQ", 
				"https://embed.spotify.com/?uri=spotify:track:3JX2XXNXlgpBnnqDlw2UTX"
				];
				
 var mFantasy=["https://embed.spotify.com/?uri=spotify:track:0wWJIERM5cOYNtx2Ct4qn8&view=coverart",
				"https://embed.spotify.com/?uri=spotify:track:3pLxD9uug7IGhl0Z9aEKID&view=coverart",
				"https://embed.spotify.com/?uri=spotify:track:5C10WCl8ePAxW6Gw8djSaf",
				"https://embed.spotify.com/?uri=spotify:track:3uiey9bRX0dd05CdAaxGfH&view=coverart",
				"https://embed.spotify.com/?uri=spotify:track:3WXI077HJGFJG1AW92KWGG",
				"https://embed.spotify.com/?uri=spotify:track:32iAaxPwx1qXFqk5NxOaFm"
				];
 });
