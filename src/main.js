// Add gradient animation.
var granimInstance = new Granim({
  element: '#granim-canvas',
  stateTransitionSpeed: 7500,
  states: {
    "default-state": {
      gradients: [
        ['#00121B', '#014060'],
        ['#00121B', '#002135'],
        ['#014060', '#00121B'],
        ['#014060', '#002135'],
        ['#002135', '#014060'],
        ['#002135', '#00121B'],
      ],
      transitionSpeed: 1500,
    }
  }
});

// Insert current year when needed.
document.querySelectorAll('.insert-current-year:not(.updated)').forEach(
  currentYear => {
    currentYear.innerHTML = new Date().getFullYear();
    currentYear.classList.add('updated');
  }
)

// Remove hash at top of page.
window.addEventListener('scroll', () => {
  if (window.scrollY || !window.location.hash) return;

  window.history.pushState({}, '', window.location.pathname);
})

// Send message from contact form.
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const elements = contactForm.elements;
  const subject = 'GE Payments Inquiry from ' + elements.company.value;
  const message = elements.message.value;
  const mailto = 'info@globalenergy.net';

  const mailtoLink = `mailto:${mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.open(mailtoLink, '_blank');
})
