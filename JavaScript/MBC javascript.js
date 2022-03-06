let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

let mainVid = document.querySelector('.main-video');

document.querySelectorAll('.course-3 .box .video video').forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});

document.querySelector('#close-vid').onclick = () =>{
    mainVid.classList.remove('active');
}

var mobile = document.createElement('div');
mobile.className = 'nav-mobile';
document.querySelector('.nav').appendChild(mobile);

// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
  }
  
  // toggleClass
  function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
      if (hasClass(elem, className)) {
          while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
              newClass = newClass.replace(' ' + className + ' ', ' ');
          }
          elem.className = newClass.replace(/^\s+|\s+$/g, '');
      } else {
          elem.className += ' ' + className;
      }
  }

