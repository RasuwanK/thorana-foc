"use strict";

/*
 INFO: This file contains the main logic for the Thorana
 
      This source code is created by the 
        ** Faculty of Computing **
            *** J'Pura *** 
*/

const baseUrl = "./assets/images/";

// Selecting the welcome prompt dialog
const welcomePrompt = document.getElementById("welcome-prompt");
// Selecting enter button
const enterButton = document.getElementById("enter-button");
// Selecting audio button
const audio = document.getElementById("thorana-audio");
//Mute button
const muteButton = document.getElementById("mute-button");
// Info button
const infoButton = document.getElementById("about-button");

// Popup to be shown
const infoPopup = document.getElementById("info-container");

// Buduras patter will be changed with 5 second intervals

// 5000 miliseconds 5 seconds
const interval = 15000;

const budurasFiles = [
  "buduras-1",
  "buduras-2",
  "buduras-3",
  "buduras-4",
  "buduras-5",
  "buduras-6",
];

// Buduras currently being selected
let current = 0;

const budurasImage = document.getElementById("buduras-lights");

// Setting the default gif
budurasImage.src = `${baseUrl}${budurasFiles[current]}.gif`;

// Buduras changing function
function changeBuduras() {
  if (budurasImage) {
    current = (current + 1) % 6;
    budurasImage.src = `${baseUrl}${budurasFiles[current]}.gif`;
  }
}

// Muting and unmuting happen here
function muteUnmuteAudio() {
  if(audio) {
    // audio state
    const status = audio.muted;
    if(status) {
      // need to unmute
      muteButton.style.backgroundImage = "url(../assets/images/sounds-on.webp)";
      audio.muted = false;
    } else {
      // need to mute
      muteButton.style.backgroundImage = "url(../assets/images/sounds-off.webp)";
      audio.muted = true;
    }
  }
}

// Showing the info banner
function showInfoBanner() {
  if(infoPopup) {
    infoPopup.style.visibility = "visible";
  }
}

function closeBanner() {
  if(infoPopup) {
    infoPopup.style.visibility = "hidden";
  }
}

function handleEnterClick() {
  // Function to play the audio
  function playAudio() {
    if (audio) {
      const playPromise = audio.play();
      if (playPromise) {
        playPromise
          .then((_) => {
            // OK !
            console.log("Audio playback started !");
          })
          .catch((error) => {
            // ERROR !
            console.ward(
              "Audio playback is prevented by the browser. Thorana will continue without audio. ",
              error
            );
          });
      }
    }

    // Event listener is no longer needed
    if (audio) audio.removeEventListener("click", handleEnterClick);
  }

  // Starting audio as the user has clicked the button
  playAudio();

  // Closing welcome screen
  if (welcomePrompt) {
    document.body.removeChild(welcomePrompt);
  }

  // Buduras animation is started after user has entered
  setInterval(changeBuduras, interval);
}

if (enterButton) {
  // When enter button is clicked
  enterButton.addEventListener("click", handleEnterClick);
}

if(muteButton) {
  muteButton.addEventListener("click", muteUnmuteAudio);
}

if(infoButton) {
  infoButton.addEventListener("click", showInfoBanner);
}

if(infoPopup) {
  infoPopup.addEventListener("click", closeBanner);
}