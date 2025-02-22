function playLocalSound() {
    const audio = new Audio(`../assets/sound/sonido.wav`);
    audio.play()
    
    
}

function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
  
    
    
}