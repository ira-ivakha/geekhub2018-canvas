
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ww = window.innerWidth;
const wh = window.innerHeight;

canvas.height = wh;
canvas.width = ww;
document.body.appendChild(canvas);
canvas.style.width = ww + 'px';
canvas.style.height = wh + 'px';

var ctx = canvas.getContext('2d');
//
// // font
// ctx.strokeStyle = "#ff0000";
// ctx.font = "50px Arial";
// ctx.strokeText("Hello World", 100, 50);
// ctx.fillText("Hello World", 100, 100);
//
// ctx.beginPath();
// //arc
// ctx.lineWidth = '10';
// ctx.arc(ww/3, wh/2, 100, 0,  Math.PI, true);
// ctx.stroke();

// ctx.fillStyle = 'green';
// ctx.fillRect(10,10,200,100);
// ctx.stroke();
// ctx.fill();
// ctx.beginPath();
// ctx.arc(ww*2/3, wh/2, 80, 0,  1.5*Math.PI, false);
// ctx.fill();
// ctx.clearRect(0,0,ww, wh);

var isMouseDown = false;

var coords = [];

canvas.addEventListener('mousedown', function(e){
  isMouseDown = true;

});

canvas.addEventListener('mouseup', function(e){
  isMouseDown = false;
  ctx.beginPath();
  coords.push('mouseup');
});

canvas.addEventListener('mousemove', function (e) {
  if (isMouseDown) {

    ctx.strokeStyle = 'blue';
    coords.push([e.clientX, e.clientY]);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.lineCap="round";
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  };
});

document.getElementById('save').addEventListener('click', function () {
  console.log('save');
  window.localStorage.setItem('coords', JSON.stringify(coords));
});

document.getElementById('redraw').addEventListener('click', function () {
  coords = JSON.parse(window.localStorage.getItem('coords'));
  console.log(coords);
  ctx.clearRect(0,0, ww,wh);
  redraw(coords);
});


function redraw(coords) {
  var timer = setInterval(function() {
    var e = {};
    var coord = coords.shift();
    e = {
      clientX: coord[0],
      clientY: coord[1]
    };
    ctx.strokeStyle = 'blue';
    ctx.lineTo(e.clientX, e.clientY);
    ctx.lineCap="round";
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
    if (!coords.length) {
      clearInterval(timer);
      ctx.beginPath();
    };
  }, 50);
}