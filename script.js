document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('resume').addEventListener('click', function() {
    window.location.href = 'https://drive.google.com/drive/folders/1d5gg1n0EhMHAPNZEz4GiUnunRsu4fC5p?usp=sharing';
});
