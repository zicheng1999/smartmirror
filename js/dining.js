
var slider_img_dining = document.querySelector('#slider-img-dining');
var imagesDI = ['19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png',
				'29.png', '30.png', '31.png', '32.png', '33.png', '34.png', '35.png', '36.png', '37.png', '38.png',
				'39.png', '40.png'];
var i = 0; 
//var imgLength = imagesDI.length;

<!--Dining-overlay-->
function onD() {
  document.getElementById("overlay-dining").style.display = "block";	
}

function offD() {
  document.getElementById("overlay-dining").style.display = "none";
  slider_img_dining.setAttribute('src', 'img/pyramid-dining/19.png');
  i = 0;
}	

function prevD(){
	if(i <= 0) {
		i = 0;	
	} else if (i > 0) {
		i--;
	}
	return setImgD(i);
}

function nextD(){
	if(i >= imagesDI.length-1) {
		i = imagesDI.length -1;
	} else if(i < imagesDI.length) {
		i++;
	}	
	return setImgD(i);
}

function setImgD(num){
	return slider_img_dining.setAttribute('src', 'img/pyramid-dining/'+imagesDI[num]);
}

