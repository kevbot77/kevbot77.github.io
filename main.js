//$(".nav").hide()
//$("#access_nav").click(function(){
//	$(".nav").show(100);
//})
var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var nav_rest = document.getElementById('nav_rest');
var nav_ul = document.getElementById('nav_ul');

menu.addEventListener('click', function(e) {
    nav.style.visibility = "visible";
    nav_rest.style.display = "block";
    nav_ul.style.width = "30%";
});

nav_rest.addEventListener('click', function(e){
    nav_ul.style.width = "0%";
    setTimeout(function(){ 
  		nav.style.visibility = "hidden";
   		nav_rest.style.display = "none";
    }, 500);  
    
});


function initMap() {
  var home = {lat: 42.4417126, lng: -76.4886702,};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat:42.4417126, lng:-76.4886702}
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Kenny</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Address</b>: 717 E Buffalo St apt 21, Ithaca, NY, 14850</p>' +
      '<p><b>Phone</b>: 810-580-0987</p>'+
      '<p><b>Email</b>: qs76@cornell.edu</p>'+
      '<p><b>Wechat</b>: alliolson258</p>'+
      '<p><b><a href="http://www.linkedin.com/in/QiWenShu" target="_blank">LinkedIn</a></b>'+
      '<b>, <a href="https://github.com/kevbot77/" target="_blank">GitHub</a></b>'+
      '<b>, <a href="https://www.facebook.com/kevin.shu.90" target="_blank">Facebook</a></b></p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: home,
    map: map,
    title: 'Home'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
    infowindow.open(map, marker);
}

$(document).ready(function() {
    setTimeout(function(){  
        $('#loading').css('opacity','0'); 
    }, 1000); 
    setTimeout(function(){  
        $('#loading').hide(); 
    }, 2000); 
 
 
});

