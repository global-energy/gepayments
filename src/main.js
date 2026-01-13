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
