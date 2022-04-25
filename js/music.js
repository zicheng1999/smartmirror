let currentMusic = 0;

const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backward-btn');

playBtn.addEventListener('click', () => {
	if(playBtn.className.includes('pause')){
		music.play();
	} else {
		music.pause();
	}
	playBtn.classList.toggle('pause');
	disk.classList.toggle('play');
})

//set music
const setMusic = (i) => {
	seekBar.value = 0;
	let song = songs[i];
	currentMusic = i;
	music.src = song.path;

	songName.innerHTML = song.name;
	artistName.innerHTML = song.artist;
	disk.style.backgroundImage = `url('${song.cover}')`;

	currentTime.innerHTML = '00:00';
	setTimeout(() => {
		seekBar.max = music.duration;
		musicDuration.innerHTML = formatTime(music.duration);
	}, 300);
}

setMusic(0);

//fomratting time in music
const formatTime = (time) => {
	let min = Math.floor(time /60);
	if(min < 10){
		min = `0${min}`;
	}
	let sec = Math.floor(time % 60);
	if(sec < 10){
		sec = `0${sec}`;
	}
	return `${min} : ${sec}`;
}

//seek bar 
setInterval (() => {
	seekBar.value = music.currentTime;
	currentTime.innerHTML = formatTime(music.currentTime);
	if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
		forwardBtn.click();
	}
}, 500)

seekBar.addEventListener('change', () => {
	music.currentTime = seekBar.value;
})

//keep music playing
const playMusic = () => {
	music.play();
	playBtn.classList.remove('pause');
	disk.classList.add('play');
}

//forward backward function
forwardBtn.addEventListener('click', () => {
	if (currentMusic >= songs.length - 1){
		currentMusic = 0;
	} else {
		currentMusic++;
	}
	setMusic(currentMusic);
	playMusic();
})

//forward backward function
backwardBtn.addEventListener('click', () => {
	if (currentMusic <= 0){
		currentMusic = songs.length - 1;
	} else {
		currentMusic--;
	}
	setMusic(currentMusic);
	playMusic();
})

//slider control volume
let volume = document.querySelector("#volume-control");

volume.addEventListener("change", function(e) {
	music.volume = e.currentTarget.value / 100;
	debugger;
})

music.volume = 0.5;

//button for volume
$("#minus-btn").click(function(event) {
	if(music.volume == 1) {
	   music.volume = 0.9;
	} else if(music.volume == 0.9) {
	   music.volume = 0.8;
	} else if(music.volume == 0.8) {
	   music.volume = 0.7;
	} else if(music.volume == 0.7) {
	   music.volume = 0.6;
	} else if(music.volume == 0.6) {
	   music.volume = 0.5;
	} else if(music.volume == 0.5) {
	   music.volume = 0.4;
	} else if(music.volume == 0.4) {
	   music.volume = 0.3;
	} else if(music.volume == 0.3) {
	   music.volume = 0.2;
	} else if(music.volume == 0.2) {
	   music.volume = 0.1;
	} else if(music.volume == 0.1) {
	   music.volume = 0;
	}
	zoom("out");
});

$("#plus-btn").click(function(event) {
  if(music.volume == 0) {
	   music.volume = 0.1;
  } else if(music.volume == 0.1) {
	   music.volume = 0.2;
  } else if(music.volume == 0.2) {
	   music.volume = 0.3;
  } else if(music.volume == 0.3) {
	   music.volume = 0.4;
  } else if(music.volume == 0.4) {
	   music.volume = 0.5;
  } else if(music.volume == 0.5) {
	   music.volume = 0.6;
  } else if(music.volume == 0.6) {
	   music.volume = 0.7;
  } else if(music.volume == 0.7) {
	   music.volume = 0.8;
  } else if(music.volume == 0.8) {
	   music.volume = 0.9;
  } else if(music.volume == 0.9) {
	   music.volume = 1;
  }
  zoom("in");
});

$("#volume-control").on('input change', function(event) {
  $('#output').text($(event.currentTarget).val());
});

function zoom(direction) {
  var slider = $("#volume-control");
  var step = parseInt(slider.attr('step'), 10);
  var currentSliderValue = parseInt(slider.val(), 10);
  var newStepValue = currentSliderValue + step;

  if (direction === "out") {
    newStepValue = currentSliderValue - step;
  } else {
    newStepValue = currentSliderValue + step;
  }

  slider.val(newStepValue).change();
};