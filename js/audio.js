// This file contains the logic for the audio autoply and audio control

document.addEventListener("DOMContentLoaded", event => {
	const audio = document.getElementById("thorana-audio");

	function playAudio() {
		if(audio) {
			const playPromise = audio.play();
			if(playPromise !== undefined) {
				playPromise.then(_ => {
					console.log("Automatic playback started");
				}).catch(error => {
					console.warn("Automatic playback prevented ! User need to be interacted with the page to start the audio.");
					document
				});
			}
		}
	}

	playAudio();
});