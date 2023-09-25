const demoCanvas = document.getElementById('canvas-demo').getContext('2d');
window.onload=function(){
demoCanvas.moveTo(0,200),
demoCanvas.lineTo(100,200),
demoCanvas.lineTo(200,60),
demoCanvas.lineTo(400,60),
demoCanvas.lineTo(450,110),
demoCanvas.lineTo(500,200),
demoCanvas.lineTo(600,200),
demoCanvas.lineTo(600,220),
demoCanvas.lineTo(0,220),
demoCanvas.lineTo(0,200),
demoCanvas.fillStyle='lightblue';
demoCanvas.fill();
}