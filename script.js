document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('resume').addEventListener('click', function() {
    window.location.href = 'https://drive.google.com/file/d/1YcYZaL3ArwH8FYSUafOQm9hKjVlAr5kP/view?usp=drive_link';
});
