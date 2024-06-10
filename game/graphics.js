// This file is responsible for adding enhanced visual feedback through graphic elements such as arrow animations and impacts.

// Function to draw arrow animations
function drawArrowAnimation(ctx, arrow) {
    ctx.beginPath();
    ctx.moveTo(arrow.x, arrow.y);
    ctx.lineTo(arrow.x + 10, arrow.y - 10);
    ctx.strokeStyle = '#FFD700'; // Golden color for arrows
    ctx.stroke();
}

// Function to draw impact animations when arrows hit targets
function drawImpactAnimation(ctx, impactPosition) {
    ctx.beginPath();
    ctx.arc(impactPosition.x, impactPosition.y, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
}
