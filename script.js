let selectedColor = 'red';

function selectColor(color) {
    selectedColor = color;
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Nastavenie veľkosti plátna na 1920 x 1080
canvas.width = 1920;
canvas.height = 780;

// Načítanie obrázka
const backgroundImage = new Image();
backgroundImage.src = 'https://assets.onecompiler.app/43cyhdz9z/43cyhdgu2/Dizajn%20bez%20na%CC%81zvu%20(8).png'; // Uisti sa, že cesta k obrázku je správna

backgroundImage.onload = function() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    drawShapes(); // Kreslenie prázdnych tvarov po načítaní obrázka
};

canvas.addEventListener('click', function(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    fillShape(x, y);
});

function drawShapes() {
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 6;

    // Kreslenie prázdneho kruhu
    ctx.beginPath();
    ctx.arc(192, 108, 80, 0, 2 * Math.PI);
    ctx.stroke();

    // Kreslenie prázdneho obdĺžnika
    ctx.beginPath();
    ctx.rect(354, 54, 250, 160);
    ctx.stroke();

    // Kreslenie prázdneho štvorca
    ctx.beginPath();
    ctx.rect(672, 54, 160, 160);
    ctx.stroke();

    // Kreslenie prázdneho trojuholníka
    ctx.beginPath();
    ctx.moveTo(960, 54);
    ctx.lineTo(864, 324);
    ctx.lineTo(1056, 324);
    ctx.closePath();
    ctx.stroke();

    // Kreslenie ďalších trojuholníkov
    ctx.beginPath();
    ctx.moveTo(288, 564);
    ctx.lineTo(576, 680);
    ctx.lineTo(384, 680);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1550, 564);
    ctx.lineTo(1300, 564);
    ctx.lineTo(1348, 680);
    ctx.closePath();
    ctx.stroke();

    // Kreslenie ďalších štvorcov
    ctx.beginPath();
    ctx.rect(96, 564, 120, 120);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(1536, 54, 200, 200);
    ctx.stroke();

    // Kreslenie ďalších obdĺžnikov
    ctx.beginPath();
    ctx.rect(672, 564, 240, 120);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(1632, 502, 160, 240);
    ctx.stroke();

    // Kreslenie ďalších kruhov
    ctx.beginPath();
    ctx.arc(1106, 600, 100, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(1248, 154, 120, 0, 2 * Math.PI);
    ctx.stroke();
}

function fillShape(x, y) {
    ctx.fillStyle = selectedColor;

    // Vyplnenie kruhu
    if (ctx.isPointInPath(new Path2D('M 192 108 m -80, 0 a 80,80 0 1,0 160,0 a 80,80 0 1,0 -160,0'), x, y)) {
        ctx.beginPath();
        ctx.arc(192, 108, 80, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Vyplnenie ďalších kruhov
    if (ctx.isPointInPath(new Path2D('M 1106 600 m -100, 0 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0'), x, y)) {
        ctx.beginPath();
        ctx.arc(1106, 600, 100, 0, 2 * Math.PI);
        ctx.fill();
    }

    if (ctx.isPointInPath(new Path2D('M 1248 154 m -120, 0 a 120,120 0 1,0 240,0 a 120,120 0 1,0 -240,0'), x, y)) {
        ctx.beginPath();
        ctx.arc(1248, 154, 120, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Vyplnenie obdĺžnika
    if (x >= 354 && x <= 604 && y >= 54 && y <= 214) {
        ctx.beginPath();
        ctx.rect(354, 54, 250, 160);
        ctx.fill();
    }

    // Vyplnenie ďalších obdĺžnikov
    if (x >= 672 && x <= 912 && y >= 564 && y <= 684) {
        ctx.beginPath();
        ctx.rect(672, 564, 240, 120);
        ctx.fill();
    }

    if (x >= 1632 && x <= 1792 && y >= 502 && y <= 742) {
        ctx.beginPath();
        ctx.rect(1632, 502, 160, 240);
        ctx.fill();
    }

    // Vyplnenie štvorca
    if (x >= 672 && x <= 832 && y >= 54 && y <= 214) {
        ctx.beginPath();
        ctx.rect(672, 54, 160, 160);
        ctx.fill();
    }

    // Vyplnenie ďalších štvorcov
    if (x >= 96 && x <= 216 && y >= 564 && y <= 684) {
        ctx.beginPath();
        ctx.rect(96, 564, 120, 120);
        ctx.fill();
    }

    if (x >= 1536 && x <= 1736 && y >= 54 && y <= 254) {
        ctx.beginPath();
        ctx.rect(1536, 54, 200, 200);
        ctx.fill();
    }

    // Vyplnenie trojuholníka
    if (ctx.isPointInPath(new Path2D('M 960 54 L 864 324 L 1056 324 Z'), x, y)) {
        ctx.beginPath();
        ctx.moveTo(960, 54);
        ctx.lineTo(864, 324);
        ctx.lineTo(1056, 324);
        ctx.closePath();
        ctx.fill();
    }

    // Vyplnenie ďalších trojuholníkov
    if (ctx.isPointInPath(new Path2D('M 288 564 L 576 680 L 384 680 Z'), x, y)) {
        ctx.beginPath();
        ctx.moveTo(288, 564);
        ctx.lineTo(576, 680);
        ctx.lineTo(384, 680);
        ctx.closePath();
        ctx.fill();
    }

    if (ctx.isPointInPath(new Path2D('M 1550 564 L 1300 564 L 1348 680 Z'), x, y)) {
        ctx.beginPath();
        ctx.moveTo(1550, 564);
        ctx.lineTo(1300, 564);
        ctx.lineTo(1348, 680);
        ctx.closePath();
        ctx.fill();
    }
}
