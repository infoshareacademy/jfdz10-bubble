function goalieMovement() {
    var goalie = document.getElementById('goalie');
    right();
   function right(){
    var interval = setInterval(function() {
      goalie.style.left = goalie.offsetLeft + 2 + 'px'
      if (goalie.style.left === '880px'){
        clearInterval(interval)
      left()
    }
    }, 10);
  }
  function left(){
    var interval = setInterval(function() {
      
      goalie.style.left = `${goalie.offsetLeft - 2}px`
      if (goalie.style.left === '360px'){
        clearInterval(interval)
      right()}
    }, 10);
  }
  }
  
  goalieMovement();