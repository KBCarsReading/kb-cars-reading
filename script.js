document.addEventListener("DOMContentLoaded", function () {
  // --- HAMBURGER MENU LOGIC ---
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    // Optional: Close menu when a link is clicked
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  }

  // --- BOOKING FORM LOGIC ---
  // In your HTML, your form class is "quick-booking". 
  // Let's target that instead of the ID to be safe.
  const bookingForm = document.querySelector('.quick-booking');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      // Note: Since you are using formsubmit.co, 
      // e.preventDefault() might stop the email from sending.
      // Only use preventDefault() if you are handling the email via AJAX/Fetch.
      
      console.log("Form submitted!");
      // If you have a success message div, show it here:
      const successMsg = document.getElementById('form-success');
      if (successMsg) successMsg.style.display = 'block';
    });
  }

  // --- SCROLL REVEAL LOGIC ---
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Optional: stop watching once it has revealed
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.15 // Trigger when 15% of the element is visible
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
});
