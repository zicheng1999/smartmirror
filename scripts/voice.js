if (annyang) {
  // Let's define a command.
  const commands = {
	  
	  //---Youtube---//
    'play youtube': function() { 
		$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
	},
	'pause youtube': function() { 
		$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	},
	
	  //---Music---//
	'play music': function() { 
		music.play();
		playBtn.classList.toggle('pause');
		disk.classList.toggle('play');
	},
	'pause music': function() { 
		music.pause();
		//playBtn.classList.toggle('play');
		//disk.classList.toggle('pause');
	}
  };


  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}