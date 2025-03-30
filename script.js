// Function to handle user login
function handleLogin() {
    const emailInput = document.querySelector('.hero-buttons input[type="text"]');
    const email = emailInput.value;

    if (email) {
        // Simulate a successful login
        alert(`Welcome, ${email}! You are now logged in.`);
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
}

// Function to toggle FAQ answers
function toggleFAQ(event) {
    const faqBox = event.currentTarget;
    const svg = faqBox.querySelector('svg');

    // Toggle the visibility of the answer
    const isOpen = faqBox.classList.toggle('open');
    if (isOpen) {
        svg.style.transform = 'rotate(45deg)'; // Rotate the icon when open
    } else {
        svg.style.transform = 'rotate(0deg)'; // Reset rotation when closed
    }
}

// Event listener for the "Get Started" button
document.querySelector('.btn-red').addEventListener('click', handleLogin);

// Event listeners for FAQ items
const faqBoxes = document.querySelectorAll('.faqbox');
faqBoxes.forEach(box => {
    box.addEventListener('click', toggleFAQ);
});
