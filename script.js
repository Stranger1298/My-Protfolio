document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('dark-mode');

    if (darkModeToggle.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '&#127770;'; // Moon symbol in dark mode
    } else {
        darkModeToggle.innerHTML = '&#9728;'; // Sun symbol in light mode
    }
});
