document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Here, you can add login validation logic
    // For example, check if the username and password are correct
    // If they are correct, you might redirect to a different page
  
    // For demonstration, let's just log a message
    console.log('Login successful! Redirecting...');
  });
  