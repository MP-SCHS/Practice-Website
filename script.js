// Select the button and the message elements by their IDs
const toggleButton = document.getElementById('toggleButton');
const messageElement = document.getElementById('message');

// Add an event listener to the button for a 'click' event
toggleButton.addEventListener('click', function() {
    // Toggle the 'hidden-text' class on the message element
    // If the class is present, it removes it (making the text visible)
    // If the class is missing, it adds it (hiding the text)
    messageElement.classList.toggle('hidden-text');
    messageElement.classList.toggle('visible-text'); // Optional: toggle the visible class as well

    // Optional: change the button's text based on visibility
    if (messageElement.classList.contains('hidden-text')) {
        toggleButton.textContent = 'Funny Moment';
    } else {
        toggleButton.textContent = 'Click if you dont accept the hard truth.';
    }
});

