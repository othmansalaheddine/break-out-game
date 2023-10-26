document.addEventListener('DOMContentLoaded', function() {
    const movingImage = document.getElementById('board');

    document.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        // const mouseY = event.clientY;

        movingImage.style.left = mouseX + 'px';
        // movingImage.style.top = mouseY + 'px';
    });
});

const rasImage = document.getElementById('ras');

        let ballY = 0;// Initial position of the "ras" image
        let ballX = 0;
        let verticalVelocity = 0; // Initial vertical velocity
        const gravity = .2; // Gravity value

        function moveBall() {
            // Apply gravity to the vertical velocity
            verticalVelocity += gravity;

            // Update the position of the "ras" image
            ballY += verticalVelocity;
            rasImage.style.top = ballY + "px";
            ballX += verticalVelocity;
            rasImage.style.top = ballX + "px";

            // Check for collisions with the canvas floor
            if (ballY + rasImage.clientHeight > window.innerHeight) {
                ballY = window.innerHeight - rasImage.clientHeight;
                verticalVelocity = -verticalVelocity; // Reverse the vertical direction
            }

            requestAnimationFrame(moveBall);
        }
        moveBall();

        // Call the function to start making the "ras" image fall