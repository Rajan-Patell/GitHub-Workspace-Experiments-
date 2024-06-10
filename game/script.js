// Game logic for the run shooting game

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    width: 50,
    height: 50,
    speed: 5,
    dx: 0,
    dy: 0
};

let enemies = [];
let arrows = [];

function drawPlayer() {
    ctx.fillStyle = '#0000FF'; // Blue color for the player
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawArrow() {
    arrows.forEach(arrow => {
        ctx.fillStyle = '#FF0000'; // Red color for arrows
        ctx.fillRect(arrow.x, arrow.y, arrow.width, arrow.height);
    });
}

function drawEnemies() {
    enemies.forEach(enemy => {
        ctx.fillStyle = '#FF0000'; // Red color for enemies
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
    clearCanvas();
    drawPlayer();
    drawArrow();
    drawEnemies();

    player.x += player.dx;
    player.y += player.dy;

    arrows.forEach(arrow => { // Move arrows
        arrow.y -= arrow.speed;
    });

    arrows = arrows.filter(arrow => arrow.y > 0); // Remove arrows that go off screen

    requestAnimationFrame(update);
}

function moveRight() {
    player.dx = player.speed;
}

function moveLeft() {
    player.dx = -player.speed;
}

function moveUp() {
    player.dy = -player.speed;
}

function moveDown() {
    player.dy = player.speed;
}

function shootArrow() {
    arrows.push({
        x: player.x + player.width / 2 - 5, // Center the arrow on the player
        y: player.y,
        width: 10,
        height: 20,
        speed: 7
    });
}

function keyDown(e) {
    if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveRight();
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveLeft();
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveUp();
    } else if (e.key === 'ArrowDown' || e.key === 'Down') {
        moveDown();
    } else if (e.key === ' ' || e.key === 'Spacebar') {
        shootArrow();
    }
}

function keyUp(e) {
    if (
        e.key == 'Right' ||
        e.key == 'ArrowRight' ||
        e.key == 'Left' ||
        e.key == 'ArrowLeft' ||
        e.key == 'Up' ||
        e.key == 'ArrowUp' ||
        e.key == 'Down' ||
        e.key == 'ArrowDown'
    ) {
        player.dx = 0;
        player.dy = 0;
    }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

update();
