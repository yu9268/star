'use strict';

{
  onload = function (){
    let x = 100;
    let y = 200;
    let h = 300;

    const canvas = document.querySelector('canvas');
    const g = canvas.getContext('2d');
    g.beginPath();
    g.strokeStyle = "rgb(0, 0, 0)";
    g.lineWidth = 1;
    g.moveTo(x,y);
    g.lineTo(x += h,y);
    g.lineTo(x -= Math.cos(Math.PI / 5) * h, y += Math.sin(Math.PI / 5) * h);
    g.lineTo(x -= Math.cos(Math.PI / 5 * 3) * h, y -= Math.sin(Math.PI / 5 * 3) * h);
    g.lineTo(x -= Math.cos(Math.PI / 5 * 3) * h, y += Math.sin(Math.PI / 5 * 3) * h);
    g.lineTo(x -= Math.cos(Math.PI / 5) * h, y -= Math.sin(Math.PI / 5) * h);
    
    
    g.stroke();
  }
}