document.addEventListener('DOMContentLoaded', function() {
    const movingImage = document.getElementById('board');

    document.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        // const mouseY = event.clientY;

        movingImage.style.left = mouseX + 'px';
        // movingImage.style.top = mouseY + 'px';
    });
});
