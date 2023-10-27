document.addEventListener('DOMContentLoaded', function() {
    const movingImage = document.getElementById('board');

    document.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        // const mouseY = event.clientY;

        movingImage.style.left = mouseX + 'px';
        // movingImage.style.top = mouseY + 'px';
    });
});
const alf = document.getElementById("alf");
const alfyn = document.getElementById("alfyn");
const rb3alaf = document.getElementById("rb3alaf");
const ras= document.getElementById("ras");
ras.addEventListener("click", function() {
  alf.remove();
});
 


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
            ballX = 700 ;
            ballY = 400;
            
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


document.addEventListener('DOMContentLoaded', function() {
    const ras = document.getElementById('ras');
    const rb3alafDivs = document.querySelectorAll('.rb3alaf div');
    const alfaynDivs = document.querySelectorAll('.alfayn div');
    const alfDivs = document.querySelectorAll('.alf div');

    // Fonction pour détecter la collision entre deux éléments
    function isColliding(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();

        return (
            rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top
        );
    }

    // Fonction pour vérifier les collisions et supprimer les divs
    function checkCollisions() {
        rb3alafDivs.forEach(rb3alafDiv => {
            if (isColliding(ras, rb3alafDiv)) {
                rb3alafDiv.remove();
            }
        });

        alfaynDivs.forEach(alfaynDiv => {
            if (isColliding(ras, alfaynDiv)) {
                alfaynDiv.remove();
            }
        });

        alfDivs.forEach(alfDiv => {
            if (isColliding(ras, alfDiv)) {
                alfDiv.remove();
            }
        });
    }

    // Écouter le clic sur "ras" et vérifier les collisions
    ras.addEventListener("click", function() {
        rb3alafDivs.forEach(rb3alafDiv => {
            if (isColliding(ras, rb3alafDiv)) {
                rb3alafDiv.remove();
            }
        });

        alfaynDivs.forEach(alfaynDiv => {
            if (isColliding(ras, alfaynDiv)) {
                alfaynDiv.remove();
            }
        });

        alfDivs.forEach(alfDiv => {
            if (isColliding(ras, alfDiv)) {
                alfDiv.remove();
            }
        });
    });

    // Vérifier les collisions à intervalles réguliers
    setInterval(checkCollisions, 100); // Vous pouvez ajuster l'intervalle en fonction de vos besoins
});
