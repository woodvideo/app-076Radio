var player;
var playKnop;
var pauseKnop;

		setTimeout(function () {
			player= document.getElementById('player');
			playKnop = document.getElementById('playKnop');
			pauseKnop = document.getElementById('pauseKnop');	
			
			pauseKnop.style.display='none';	
	   }, 10); 

	
	
	function playMusic()
	{
		player.play();
		playKnop.style.display='none';
		pauseKnop.style.display='inline';
	}
	function pauseMusic()
	{
		player.pause();
		pauseKnop.style.display='none';
		playKnop.style.display='inline';
	}
	function stopMusic()
	{
		player.pause();
		player.currentTime = 0;
		pauseKnop.style.display='none';
		playKnop.style.display='inline';
	}



