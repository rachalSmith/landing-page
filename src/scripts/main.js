// DOM Elements
const navSpace = document.querySelector('.navLinks'); // Space where Li are inserted
const navLinks = document.querySelectorAll('.navLinks li'); // Actual Li text
const burger = document.querySelector('.burger');
const sections = document.getElementsByTagName('section');


// Creates a href and class navTextAdded & adds navLinks from HTML sections
const addNavLi = sections => {
  for (const section of sections) {
    let navText = section.getAttribute('navText');
    let sectId = section.getAttribute('id');
    const liAdded = `<li><a href="#${sectId}" class="navTextAdded">${navText}</a></li>`;
    navSpace.insertAdjacentHTML("beforeend", liAdded);
  }
};


// Adds and removes navActive property
const navSlide = () => {
  navSpace.classList.toggle('navMobileActive');
}


// Animate mobile port nav links with time delay
const animateLinks = () => {
  let navTextAdded = document.querySelectorAll('.navTextAdded');
  navTextAdded.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ''
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.25}s`;
    }
  })
};


// Transforms burger into cross
const animateBurger = () => {
  burger.classList.toggle('burgerToggle');
}


// Smooth scroll from CDN
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000
});


// Returns top of viewport
const returnTop = element => {
  const viewPort = element.getBoundingClientRect();
  return (viewPort.top === 0);
}


// Adds and removes sections to show active
const activeSection = (sections) => {
  for (const section of sections) {
    if (returnTop(section)) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  }
}


// Event listeners
burger.addEventListener('click', navSlide);
burger.addEventListener('click', animateLinks);
burger.addEventListener('click', animateBurger);
window.addEventListener('scroll', () => {
  activeSection(sections);
})


// Run
addNavLi(sections)
navSlide()
animateLinks()
animateBurger()
