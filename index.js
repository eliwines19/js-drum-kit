function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) {return}; // does nut run the audio if the audio element doesn'e exist

    audio.currentTime = 0; // restarts the audio

    audio.play();

    key.classList.add("playing")

}

window.onload = (e) => {

    function removeTransition(e) {
        if (e.propertyName !== "transform") {return}; // skip if not a transform
        this.classList.remove("playing");
    }
    
    const keys = document.querySelectorAll('.key');
    
    keys.forEach(key => key.addEventListener("transitionend", removeTransition));

}

window.addEventListener("keydown", playSound)