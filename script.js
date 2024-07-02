
let wheelCanvas = document.getElementById('wheelCanvas');
let ctx = wheelCanvas.getContext('2d');
let names = [];
let currentAngle = 0;
let colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

function setupWheel() {
    names = document.getElementById('names').value.split(',');
    drawWheel();
}

function drawWheel() {
    let arcSize = 2 * Math.PI / names.length;
    for (let i = 0; i < names.length; i++) {
        let angle = currentAngle + i * arcSize;
        ctx.beginPath();
        ctx.arc(250, 250, 200, angle, angle + arcSize, false);
        ctx.lineTo(250, 250);
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.save();

        ctx.translate(250 + Math.cos(angle + arcSize / 2) * 150, 250 + Math.sin(angle + arcSize / 2) * 150);
        ctx.rotate(angle + arcSize / 2 + Math.PI / 2);
        ctx.fillStyle = "#000";
        ctx.fillText(names[i], -ctx.measureText(names[i]).width / 2, 0);
        ctx.restore();
    }
}

function spinWheel() {
    let randomIndex = Math.floor(Math.random() * names.length);
    let selectedAngle = randomIndex * (2 * Math.PI / names.length);
    currentAngle = selectedAngle;
    drawWheel();
    setTimeout(() => {
        alert('Selected: ' + names[randomIndex]);
        currentAngle = 0; // Reset to default
        drawWheel();
    }, 3000);
}

function changeColor() {
    let color = document.getElementById('color').value;
    colors = Array(names.length).fill(color);
    drawWheel();
}
