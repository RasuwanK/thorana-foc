/*
	This file contains the logic for loading screen
*/

// Adding the loading event listener

window.addEventListener("load", () => {
	// This will run after loading the window
	const loadingScreen = document.getElementById("loading-screen");
	if(loadingScreen) {
		document.body.removeChild(loadingScreen);
	}
});