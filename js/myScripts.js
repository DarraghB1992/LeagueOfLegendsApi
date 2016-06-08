// Created by Github user: DarraghB1992 :D 

$(document).ready(function() {

	//Enter your api key here
	var myKey = "";

	var championList = 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=all&api_key='+ myKey;
	var riotStaticData = "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?api_key="+ myKey;
	var testLink = 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=image&api_key='+ myKey;
	
	var region = $('#region').val();
	var userName = $('#userName').val();


	var summonerNameLink = 'https://'+region+'.api.pvp.net/api/lol/'+region+'/v1.4/summoner/by-name/'+userName+'?api_key='+ myKey;
	var latestVersion = 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/versions?api_key='+ myKey;
	var championName = "";
	var championIDs = "";
	var champImage = '';

	var champPicUrl = "http://ddragon.leagueoflegends.com/cdn/6.11.1/img/champion/" + champImage;

	var lastestPicture ='';



	$.ajax({
		url: latestVersion, 

		success: function(results){
			

			lastestPicture += results[0];	

		}
	});
	$('#search').keyup(function(){
		var searchField = $('#search').val();
		var myExp = new RegExp(searchField, 'i');

	$.ajax({
		url: testLink, 

		success: function(results){
			
			var newChampList ='';
			$.each ( results.data , function ( prop, oElement ) {
				if((oElement.name.search(myExp) != -1)){

				newChampList += "<div class='col-lg-3 col-md-4 col-xs-6 thumb'><a class='thumbnail'href='#'><img src='http://ddragon.leagueoflegends.com/cdn/"+lastestPicture+"/img/champion/"+oElement.image.full +"'></a><h2>"+ oElement.name +"</h2> <h4>"+ oElement.title +"</h4></div>"
				
				championIDs += oElement.id;
			}
				
			})
			

			
			$('.content').html(newChampList);
			
			
			

			
		}
	})
});



});
