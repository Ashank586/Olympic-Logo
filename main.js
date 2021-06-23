var c = document.getElementById("mycanvas");
ctx= c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=2;
ctx.rect(100, 70, 500, 300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=3;
ctx.arc(215, 185,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=3;
ctx.arc(270, 215,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.arc(325, 185,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=3;
ctx.arc(380, 210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=3;
ctx.arc(435, 185,40,0,2*Math.PI);
ctx.stroke();


