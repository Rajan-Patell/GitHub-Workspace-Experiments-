// Basic enemy AI for the run shooting game

let enemies = []; // Array to store enemy objects

// Function to create enemies and add them to the enemies array
function createEnemy(x, y) {
    let enemy = {
        x: x,
        y: y,
        width: 40,
        height: 40,
        speed: 2,
        direction: 'left',
        alive: true
    };
    enemies.push(enemy);
}

// Function to draw enemies on the canvas
function drawEnemies(ctx) {
    enemies.forEach(enemy => {
        if (enemy.alive) {
            ctx.fillStyle = '#FF0000'; // Red color for enemies
            ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        }
    });
}

// Function to update enemy positions and behaviors
function updateEnemies() {
    enemies.forEach(enemy => {
        if (enemy.direction === 'left') {
            enemy.x -= enemy.speed;
            if (enemy.x < 0) {
                enemy.direction = 'right';
            }
        } else if (enemy.direction === 'right') {
            enemy.x += enemy.speed;
            if (enemy.x + enemy.width > canvas.width) {
                enemy.direction = 'left';
            }
        }
    });
}

// Function to check collision between arrows and enemies
function checkArrowCollisions(arrows) {
    arrows.forEach(arrow => {
        enemies.forEach(enemy => {
            if (arrow.x < enemy.x + enemy.width &&
                arrow.x + arrow.width > enemy.x &&
                arrow.y < enemy.y + enemy.height &&
                arrow.y + arrow.height > enemy.y) {
                enemy.alive = false; // Mark enemy as dead
            }
        });
    });
}
