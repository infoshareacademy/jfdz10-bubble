var closeBtn = document.querySelector('#close-cookies-btn');
var container = document.querySelector('#cookies');

function setCookie() {
    var now = new Date();
    var expirationDateInMS = 30*24*60*60*1000; 
    now.setTime(now.getTime() + expirationDateInMS);
    var expires = 'expires=' + now.toUTCString();
    document.cookie = "expiration=true " + expires;

    container.style.display = 'none';
  }

  closeBtn.addEventListener('click', setCookie);

  
  
  function cookieExists() {
    return document.cookie.includes('expiration');
  }

  if (cookieExists()) {
    container.style.display = 'none';
    
 }

 