// When the entire webpage (HTML) is loaded and ready, this code will run
document.addEventListener('DOMContentLoaded', () => {

    // --- FAQ Section Interaction ---
    // This section is for the FAQ page where users can click questions to see answers

    // Find all the FAQ items on the page (questions and answers)
    const faqItems = document.querySelectorAll('.faq-item');

    // Go through each FAQ item (question and its corresponding answer)
    faqItems.forEach(item => {
        // Find the question part (button) of this FAQ item
        const questionButton = item.querySelector('.faq-question');
        // Find the answer part (content) of this FAQ item
        const answer = item.querySelector('.faq-answer');

        // Add a click event to the question button
        questionButton.addEventListener('click', () => {
            // Toggle the "visible" class on the answer
            // The "visible" class will determine whether the answer is shown or hidden
            answer.classList.toggle('visible');
        });
    });

    // --- Form Validation ---
    // This part handles the "Sign up for Free Lesson" form submissions

    // Find the form on the page (if it exists)
    const signupForm = document.getElementById('signup-form');
    if (signupForm) { // Only do the following if the form is found
        // Add an event listener to handle the form submission
        signupForm.addEventListener('submit', (event) => {
            // Prevent the form from refreshing the page when submitted
            event.preventDefault();

            // Get the input field for the user's name
            const nameInput = signupForm.querySelector('input[name="name"]');
            // Get the input field for the user's phone number
            const phoneInput = signupForm.querySelector('input[name="phone"]');

            // Check if the name field is empty
            if (nameInput.value.trim() === '') { // Trim removes unnecessary spaces
                alert('Please enter your name'); // Show a message asking for the name
                return; // Stop here and don't proceed further
            }

            // Check if the phone number field is empty
            if (phoneInput.value.trim() === '') { // Same trimming for spaces
                alert('Please enter your phone number'); // Show a message asking for the phone number
                return; // Stop here and don't proceed further
            }

            // If both fields are filled, show a thank-you message
            alert('Thank you for signing up! We will contact you soon.');

            // Clear all fields in the form to get ready for a new submission
            signupForm.reset();
        });
    }
});
