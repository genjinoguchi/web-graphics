/*
 * Example javascript code for drawing things on the HTML5 Canvas.
 * From Mr. Zamansky's SoftDev class.
 *
 */

var c = documnet.getElementById("c");
var ctx = c.getContext("2d");

ctx.fillStyle = "af00000";
ctx.fillRect(20,20,70,100);

ctx.strokeStyle = "#000000";
ctx.strokeRect(20,20,70,100);

ctx.beginPath();
ctx.moveTo(400,400);
ctx.lineTo();

