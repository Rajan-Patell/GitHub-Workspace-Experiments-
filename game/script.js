// Game logic and functionality

// Player object
const player = {
    x: 50,
    y: 50,
    speed: 5,
    move: function(direction) {
        switch (direction) {
            case 'up':
                this.y -= this.speed;
                break;
            case 'down':
                this.y += this.speed;
                break;
            case 'left':
                this.x -= this.speed;
                break;
            case 'right':
                this.x += this.speed;
                break;
        }
        updateGameArea();
    }
};

// Enemy object
const enemy = {
    x: 100,
    y: 100,
    speed: 3,
    move: function() {
        // Simple AI to follow the player
        if (player.x > this.x) {
            this.x += this.speed;
        } else {
            this.x -= this.speed;
        }
        if (player.y > this.y) {
            this.y += this.speed;
        } else {
            this.y -= this.speed;
        }
        updateGameArea();
    }
};

// Game area update function
function updateGameArea() {
    const gameArea = document.getElementById('game-container');
    gameArea.innerHTML = ''; // Clear the game area
    // Draw player
    const playerElement = document.createElement('div');
    playerElement.style.left = player.x + 'px';
    playerElement.style.top = player.y + 'px';
    playerElement.classList.add('player');
    gameArea.appendChild(playerElement);
    // Draw enemy
    const enemyElement = document.createElement('div');
    enemyElement.style.left = enemy.x + 'px';
    enemyElement.style.top = enemy.y + 'px';
    enemyElement.classList.add('enemy');
    gameArea.appendChild(enemyElement);
}

// Event listeners for player movement
document.addEventListener('keydown', function(e) {
    switch (e.key) {
        case 'ArrowUp':
            player.move('up');
            break;
        case 'ArrowDown':
            player.move('down');
            break;
        case 'ArrowLeft':
            player.move('left');
            break;
        case 'ArrowRight':
            player.move('right');
            break;
    }
});

// Initialize game
function initGame() {
    updateGameArea();
    // Enemy movement logic
    setInterval(() => {
        enemy.move();
    }, 1000 / 30); // Update enemy position 30 times per second
}

// Start the game
window.onload = initGame;
