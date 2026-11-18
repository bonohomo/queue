const canvas = document.getElementById("smile");
const c = canvas.getContext("2d");

c.lineWidth = 2;
c.beginPath();
c.arc(150, 150, 100, 0, Math.PI * 2);
c.stroke();

c.beginPath();
c.arc(120, 120, 10, 0, Math.PI * 2);
c.stroke();

c.beginPath();
c.arc(180, 120, 10, 0, Math.PI * 2);
c.stroke();

c.beginPath();
c.arc(150, 140, 80, 0, Math.PI, false);
c.stroke();