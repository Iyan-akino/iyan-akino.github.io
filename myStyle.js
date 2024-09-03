document.querySelector('.form-button').addEventListener('click', () => {
    const name = document.querySelector('input[placeholder="Your Name"]');
    const email = document.querySelector('input[placeholder="Your Email"]');
    const message = document.querySelector('textarea');

    if (!name.value || !email.value || !message.value) {
        alert("Please fill out all fields.");
    } else {
        alert("Message sent! (not really, just a demo)");
    }
});





