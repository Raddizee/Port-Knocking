const root = document.documentElement;
const switches = document.querySelectorAll('.theme-switch');
const labels = document.querySelectorAll('.theme-toggle__label');
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');

function updateLabels(mode) {
  labels.forEach(label => {
    label.textContent = mode === 'dark' ? 'Light Mode' : 'Dark Mode';
  });
}

function applyTheme(mode) {
  root.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
  switches.forEach(sw => sw.checked = mode === 'dark');
  updateLabels(mode);
}

const saved = localStorage.getItem('theme') || 'light';
applyTheme(saved);

switches.forEach(sw => {
  sw.addEventListener('change', () => {
    applyTheme(sw.checked ? 'dark' : 'light');
  });
});

burgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  burgerBtn.setAttribute('aria-expanded', isOpen);
});

//toggle

const items = document.querySelectorAll(
  ".article > h1, .article > p, .article > .step, .article > .note, .article > .back-link"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

items.forEach((item) => {
  observer.observe(item);
});

//22

const paragraphItems = document.querySelectorAll(".paragraph > *");

const paragraphObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

paragraphItems.forEach((item) => {
  paragraphObserver.observe(item);
});


const teamCards = document.querySelectorAll(".team-card");

const teamObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

teamCards.forEach((card) => {
  teamObserver.observe(card);
});


/* =========================================
   TOPOLOGY FADE IN
========================================= */

const topologyItems = document.querySelectorAll(
  ".hero, .diagram-card, .legend, .step, .back-link"
);

const topologyObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

});


topologyItems.forEach((item) => {

  topologyObserver.observe(item);

});
