const anchors = document.querySelectorAll('.navbar a');

const removeActiveClass = () => {
  anchors.forEach(dot => {
    dot.classList.remove('active');
  });
}

const addActiveClass = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentAnchor = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
      removeActiveClass();
      currentAnchor.classList.add('active');
    }
  });
}

const options = {
  threshold: 0.8
};

const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll('section');

sections.forEach(section => {
  observer.observe(section);
})

const body = document.querySelector('body');
const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
});



// ======================

function checkVisibility() {
  const sections = document.querySelectorAll('.animated-appearance');
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
      section.classList.add('visible');
    }
  });
}

// Throttle function to limit how often the scroll event fires
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Add event listener with throttling
window.addEventListener('scroll', throttle(checkVisibility, 100));

// Initial check on page load
checkVisibility();
