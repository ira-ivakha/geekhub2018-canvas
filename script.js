//
//
// function parallax(section){
//   const background = section.querySelector('.background');
//   const topOffset = section.getBoundingClientRect().top;
//   const pluto = document.getElementById('pluto');
//   const jupiter = document.getElementById('jupiter');
//   // const earth = document.getElementById('earth');
//   background.style.transform = 'translateY('+(topOffset/5)+'px)';
//   pluto.style.transform = 'translate('+(topOffset )+'px, '+(topOffset/2 )+'px)';
//   jupiter.style.transform = 'translate('+(topOffset*(-1.5) )+'px, '+(topOffset*(-0.7) )+'px)';
//   // earth.style.transform = 'translate('+(topOffset*(0.3) )+'px, '+(topOffset*(-0.5) )+'px)';
// }
//
// const wrapper = document.getElementById('wrapper');
//
// // var w = window;
// // w.addEventListener('scroll', function(){
// //   // console.log('scroll', w.pageYOffset);
// //   parallax(wrapper);
// // });
//
// function raf(){
//   window.requestAnimationFrame(raf);
//
//   parallax(wrapper);
//
// };
//
// raf();


//
//
// var elem = document.getElementById('jupiter'),
//   startTime = null,
//   endPos = 500, // в пикселях
//   duration = 2000; // в миллисекундах
//
// function render(time) {
//   if (time === undefined) {
//     time = new Date().getTime();
//   }
//   if (startTime === null) {
//     startTime = time;
//   }
//
//   elem.style.left = ((time - startTime) / duration * endPos % endPos) + 'px';
// }
//
// elem.onclick = function() {
//   (function animationLoop(){
//     render();
//     requestAnimationFrame(animationLoop, elem);
//   })();
// };
//
// var jupiter = document.getElementById('jupiter');
// var isAnimated = false;

//
// window.addEventListener('scroll', function(){
//   showElement();
// });


// function requestFrame(){
//   window.requestAnimationFrame(requestFrame);
//   showElement();
// };
//
// requestFrame();
//
//
// function showElement() {
//   var offset = jupiter.getBoundingClientRect().top;
//   if (!isAnimated)
//     if (offset < window.scrollY) {
//       jupiter.classList.add('animated');
//       isAnimated = true;
//     }
// }