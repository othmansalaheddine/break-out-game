document.addEventListener('DOMContentLoaded', function() {
    const movingImage = document.getElementById('board');

    document.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        // const mouseY = event.clientY;

        movingImage.style.left = mouseX + 'px';
        // movingImage.style.top = mouseY + 'px';
    });
});


// 
document.addEventListener('DOMContentLoaded', function() {
    const ball = document.getElementById('ras');
    const board = document.getElementById('board');
    let ballX = 0;  // Initial X position
    let ballY = 0;  // Initial Y position
    let dx = 4;     // X-axis speed
    let dy = 4;     // Y-axis speed

    // Function to move the ball
    function moveBall() {
        ballX += dx;
        ballY += dy;

        // Check for collision with the board element
        if (
            ballX + ball.clientWidth > board.offsetLeft &&
            ballX < board.offsetLeft + board.clientWidth &&
            ballY + ball.clientHeight > board.offsetTop
        ) {
            // Reverse the vertical direction
            dy = -dy;
        } else if (ballY > window.innerHeight) {
            // If the ball reaches the bottom without hitting the board, reset its position
            ballX = 0;
            ballY = 0;
            
        }

        // Reverse direction if the ball hits the screen boundaries
        if (ballX < 0 || ballX + ball.clientWidth > window.innerWidth) {
            dx = -dx;
        }
        if (ballY < 0) {
            dy = -dy;
        }

        // Update the ball's position
        ball.style.left = ballX + 'px';
        ball.style.top = ballY + 'px';
        
        // Request animation frame to continue moving the ball
        requestAnimationFrame(moveBall);
    }

    // Start moving the ball
    moveBall();
});

