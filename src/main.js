// AGNT Markets Vanilla JS Interactivity

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
    });
}

if (closeMenuBtn && mobileMenu) {
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}

// Current Time Update
const timeDisplay = document.getElementById('current-time');

function updateTime() {
    if (timeDisplay) {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        timeDisplay.textContent = timeStr;
    }
}

setInterval(updateTime, 1000);
updateTime();

// Background Canvas Effect (Simple Matrix-like or Grid)
const canvas = document.getElementById('bg-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    const dots = [];
    for (let i = 0; i < 50; i++) {
        dots.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#6ee38c';
        ctx.globalAlpha = 0.2;

        dots.forEach(dot => {
            dot.x += dot.vx;
            dot.y += dot.vy;

            if (dot.x < 0) dot.x = width;
            if (dot.x > width) dot.x = 0;
            if (dot.y < 0) dot.y = height;
            if (dot.y > height) dot.y = 0;

            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
}
