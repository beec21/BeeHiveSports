
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const players = document.querySelectorAll('.player');
const tiers = document.querySelectorAll('.tier');

players.forEach(player => {
    player.addEventListener('dragstart', () => {
        player.classList.add('dragging');
    });
    player.addEventListener('dragend', () => {
        player.classList.remove('dragging');
    });
});

tiers.forEach(tier => {
    tier.addEventListener('dragover', (e) => {
        e.preventDefault();
        const dragging = document.querySelector('.dragging');
        if (dragging) tier.appendChild(dragging);
    });
});
