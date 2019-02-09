function goalieMovement() {
    var goalie = document.getElementById('goalie__container');
    right();
   function right(){
    var interval = setInterval(function() {
      goalie.style.left = goalie.offsetLeft + 2 + 'px'
      if (goalie.style.left === '600px'){
        clearInterval(interval)
      left()
    }
    }, 10);
  }
  function left(){
    var interval = setInterval(function() {
      
      goalie.style.left = `${goalie.offsetLeft - 2}px`
      if (goalie.style.left === '100px'){
        clearInterval(interval)
      right()}
    }, 10);
  }
  }
  
  goalieMovement();
