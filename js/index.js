const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

const contentElements = document.querySelectorAll('.content-element');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate'); 
    //   observer.unobserve(entry.target); // Stop observing once animated
    }
    else
    {
        entry.target.classList.remove('animate');
    }
  });
});

contentElements.forEach((element) => {
  observer.observe(element);
});
