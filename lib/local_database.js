// HTML5 local storage access functionality w/ cookie fallback for JavaScript. Part of mmvc library, http://code.google.com/p/mmvc/

function setCookie(name, value, minutes) {
  let expires = "";
  if (minutes != 0) {
    let date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    expires ="; expires=" + date.toGMTString();
  }
  document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(name) {
  let nameEquals = name + "=";
  let cookie = document.cookie.split(";");
  for (var i = 0; i < cookie.length; i++) {
    let cook = cookie[i];
    while (cook.charAt(0) === " ") {
      cook = cook.substring(1, cook.length);
      if (cook.indexOf(nameEquals) === 0) {
        return cook.substring(nameEquals.length, cook.length);
      }
    }
  }
  return null;
}

function eraseCookie(name) {
  setCookie(name, "", -1);
}

function setLocal(key, value) {
  value = JSON.stringify(value);
  if (typeof(localStorage) === "undefined") {
    setCookie(key, value, 0);
  } else {
    localStorage.setItem(key, value);
  }
}

function getLocal(key) {
  let value = "";
  if (typeof(localStorage) === "undefined") {
    value = getCookie(key);
  } else {
    value = localStorage.getItem(key);
  }
  return JSON.parse(value);
}

function eraseLocal(key) {
  if (typeof(localStorage) === "undefined") {
    eraseCookie(key);
  } else {
    localStorage.removeItem(key);
  }
}
