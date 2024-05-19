document.addEventListener("DOMContentLoaded", function() {
    const rainContainer = document.querySelector('.rain');

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}vw`;
        raindrop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
        raindrop.style.animationDelay = `${Math.random() * 5}s`;
        rainContainer.appendChild(raindrop);

        // Remove the raindrop after animation ends to prevent DOM overload
        raindrop.addEventListener('animationend', () => {
            raindrop.remove();
        });
    }

    for (let i = 0; i < 100; i++) {
        createRaindrop();
    }

    // Adjust rain intensity by controlling the interval
    setInterval(createRaindrop, 100);
});
