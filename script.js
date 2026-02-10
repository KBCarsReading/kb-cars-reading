// Simple booking form submission
document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page refresh
  document.getElementById('form-success').style.display = 'block';
  this.reset();
});
