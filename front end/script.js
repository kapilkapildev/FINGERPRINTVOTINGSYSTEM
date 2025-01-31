document.getElementById('adminLoginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    if (!username || !password) {
      errorMessage.textContent = 'Both fields are required.';
      errorMessage.style.display = 'block';
      return;
    }
  
    // Simulate login check (replace with real API call in production)
    if (username === 'admin' && password === 'password123') {
      alert('Login successful!');
      window.location.href = '/Users/test/Desktop/"My project"/front end/voters.html'; // Redirect after login
    } else {
      errorMessage.textContent = 'Invalid username or password.';
      errorMessage.style.display = 'block';
    }
  });
  