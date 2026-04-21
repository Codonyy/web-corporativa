// Cookie Banner functionality
document.addEventListener('DOMContentLoaded', function() {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesBtn = document.getElementById('accept-cookies');
  const rejectCookiesBtn = document.getElementById('reject-cookies');

  // Check if user has already made a choice
  const cookieConsent = localStorage.getItem('cookieConsent');
  if (cookieConsent) {
    // Hide banner if previous choice exists
    cookieBanner.classList.add('hidden');
  }

  // Accept cookies
  acceptCookiesBtn.addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner.classList.add('hidden');
    // Here you could load analytics or other tracking scripts
  });

  // Reject cookies
  rejectCookiesBtn.addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'rejected');
    cookieBanner.classList.add('hidden');
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
