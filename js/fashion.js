
var slider_img_fashion = document.querySelector('#slider-img-fashion');
var imagesFA = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png',
			  '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png'];
var j = 0; 
//var imgLength = imagesFA.length;

<!--Fashion-overlay-->
function onF() {
  document.getElementById("overlay-fashion").style.display = "block";
}

function offF() {
  document.getElementById("overlay-fashion").style.display = "none";
  slider_img_fashion.setAttribute('src', 'img/pyramid-fashion/1.png');
  j = 0;
}

function prevF(){
	if(j <= 0) {
		j = 0;	
	} else if (j > 0) {
		j--;
	}
	return setImgFA(j);
}

function nextF(){
	if(j >= imagesFA.length-1) {
		j = imagesFA.length -1;
	} else if(j < imagesFA.length) {
		j++;
	}	
	return setImgFA(j);
}

function setImgFA(num){
	return slider_img_fashion.setAttribute('src', 'img/pyramid-fashion/'+imagesFA[num]);
}

