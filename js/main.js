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
      console.log(currentAnchor);
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

