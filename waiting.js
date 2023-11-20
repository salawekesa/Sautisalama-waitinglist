function submitForm() {
    const emailInput = document.getElementById('email');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Simulate form submission (you can replace this with your server-side logic)
    // For demonstration purposes, let's just show a confirmation message.
    confirmationMessage.classList.remove('hidden');
    emailInput.disabled = true;
}
