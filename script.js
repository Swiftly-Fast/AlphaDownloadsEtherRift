// Smooth Scroll to the top of the page when the title is clicked
const title = document.querySelector('.title');
title.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Glow effect on the download button when hovered (enhanced interaction)
const downloadBtn = document.querySelector('.download-btn');
downloadBtn.addEventListener('mouseover', () => {
    downloadBtn.style.boxShadow = "0 0 20px rgba(0, 255, 247, 0.7)";
});

downloadBtn.addEventListener('mouseout', () => {
    downloadBtn.style.boxShadow = "0 0 10px rgba(0, 255, 247, 0.5)";
});

// Optional: Add a small welcome alert on page load (just to add some interactivity)
window.addEventListener('load', () => {
    setTimeout(() => {
        alert('Welcome to Ether Rift! Enjoy the game!');
    }, 500);
});
