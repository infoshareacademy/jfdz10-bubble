function sound() {
    this.sound = document.createElement("audio");
    this.sound.src = ['../audio/goal1.wav','../audio/goal2.wav','../audio/goal3.wav'][Math.floor(Math.random() * 3)];
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }