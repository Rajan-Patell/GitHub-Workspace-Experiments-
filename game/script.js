// Game logic, player movement, enemy interactions, scoring, and keyboard navigation

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    width: 50,
    height: 50,
    speed: 5
};

let enemies = [];
let bullets = [];
let score = 0;

function drawPlayer() {
    ctx.fillStyle = '#61dafb';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function movePlayer() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                if (player.x > 0) {
                    player.x -= player.speed;
                }
                break;
            case 'ArrowRight':
                if (player.x < canvas.width - player.width) {
                    player.x += player.speed;
                }
                break;
            case 'Space':
                shootBullet();
                break;
        }
    });
}

function shootBullet() {
    let bullet = {
        x: player.x + player.width / 2,
        y: player.y,
        width: 5,
        height: 10,
        speed: 7
    };
    bullets.push(bullet);
}

function drawBullet() {
    bullets.forEach((bullet, index) => {
        ctx.fillStyle = 'white';
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        bullet.y -= bullet.speed;

        if (bullet.y < 0) {
            bullets.splice(index, 1);
        }
    });
}

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawBullet();
    requestAnimationFrame(updateGame);
}

movePlayer();
updateGame();
