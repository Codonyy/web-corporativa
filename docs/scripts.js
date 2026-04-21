// Cookie Banner functionality
document.addEventListener('DOMContentLoaded', function() {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesBtn = document.getElementById('accept-cookies');
  const rejectCookiesBtn = document.getElementById('reject-cookies');

  // Check if user has already made a choice
  const cookieConsent = localStorage.getItem('cookieConsent');
  if (!cookieConsent) {
    // Show banner if no previous choice
    cookieBanner.classList.add('show');
  }

  // Accept cookies
  acceptCookiesBtn.addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner.classList.remove('show');
    // Here you could load analytics or other tracking scripts
  });

  // Reject cookies
  rejectCookiesBtn.addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'rejected');
    cookieBanner.classList.remove('show');
  });

  // Form validation
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const consentDades = document.getElementById('consentiment-dades').checked;
      if (!consentDades) {
        e.preventDefault();
        alert('Has de donar el consentiment pel tractament de les teves dades.');
      }
    });
  }
});
