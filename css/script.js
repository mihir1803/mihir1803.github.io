// Smooth scroll for navbar links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name && email && message) {
        alert('Thank you for your message!');
        // Here you can add code to actually send the form data
    } else {
        alert('Please fill in all fields.');
    }
});

