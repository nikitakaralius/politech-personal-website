const anchors = document.querySelectorAll('.nav-link');

const removeActiveClass = () => {
  anchors.forEach(dot => {
    dot.classList.remove('nav-link-active');
  });
}

const addActiveClass = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentAnchor = document.querySelector(`a.nav-link[href="#${entry.target.id}"]`);
      removeActiveClass();
      currentAnchor.classList.add('nav-link-active');
    }
  });
}

const options = {
  threshold: 0.97
};

const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll('section');

sections.forEach(section => {
  observer.observe(section);
})

const body = document.querySelector('body');
const themeToggleButton = document.querySelectorAll('.theme-toggle');

themeToggleButton.forEach(x => x.addEventListener('click', () => {
  body.classList.toggle('dark');
}));



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

// =======
const text = document.querySelector('.main h1');
const initialFontSize = 10; // Initial font size in vw units
const finalFontSize = 7; // Final font size in vw units
const scrollDistance = 500; // Distance over which the shrinking occurs

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition <= scrollDistance) {
    const shrinkFactor = scrollPosition / scrollDistance;
    const newFontSize = initialFontSize - (shrinkFactor * (initialFontSize - finalFontSize));
    text.style.fontSize = `${newFontSize}vw`;
  } else {
    text.style.fontSize = `${finalFontSize}vw`;
  }
});


// =====
document.querySelector('.mobile-menu').addEventListener('click', () => {
  document.querySelector('header').classList.toggle('active');
});
