const element = document.querySelector("#canvasBack");
const w = element.clientWidth;
const h = element.clientHeight;
element.width = w;
element.height = h;
const position = Array(300).join(0).split('');
const ctx = element.getContext('2d');


const initMatrix = () => {
ctx.fillStyle = "rgba(0, 15, 2, 0.15)";
ctx.fillRect(0, 0, w, h);
ctx.fillStyle = "#4caf50";
ctx.font = '15pt';
position.map(
  (y, index)  => {
// const text = String.fromCharCode(1e5 + Math.random * 10);
const text = Math.random().toString(36).substring(12);
const x = (index * 15) + 15;
canvasBack.getContext('2d').fillText(text, x, y);
y > 100 + Math.random() * 1e5 ? position[index] = 0 : position[index] = y + 15;
    }
);
};

setInterval(initMatrix, 70);
