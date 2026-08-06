// ==========================================================
// KARUR DISTRICT PORTAL — Interactions
// ==========================================================

// ---------- Mobile Navigation ----------
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// ---------- Active link on scroll ----------
function setActiveLink(link) {
  document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));
  if (link) link.classList.add('active');
}

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 140;

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      const link = document.querySelector(`.nav-link[href="#${section.getAttribute('id')}"]`);
      setActiveLink(link);
    }
  });

  // Back to top button
  const toTop = document.getElementById('to-top');
  toTop.classList.toggle('show', window.scrollY > 500);

  // Subtle hero parallax
  const heroBg = document.getElementById('hero-bg');
  if (heroBg && window.scrollY < window.innerHeight) {
    heroBg.style.transform = `scale(1.1) translateY(${window.scrollY * 0.25}px)`;
  }
});

document.getElementById('to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------- Animated counters ----------
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach((el) => {
    const target = +el.dataset.count;
    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target).toLocaleString('en-IN');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.dataset.count !== undefined) animateCounters();
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

// ---------- Build Attractions ----------
const attractions = [
  {
    title: 'Kalyana Pasupatheeswarar Temple',
    img: 'images/pasupathi.jpg',
    dist: 'Karur Town',
    tag: 'Sacred · Kongu First Shrine',
    desc: 'The landmark of Karur and foremost of the Kongu seven sthalams. Its famed sculpture shows milk oozing from a cow onto the swayambu lingam. Built by the Cholas in the 7th century.',
  },
  {
    title: 'Mayanur Barrage',
    img: 'images/mayanur.jpg',
    dist: '23 km',
    tag: 'Picnic · Kaveri',
    desc: 'A famous picnic spot on the banks of the river Kaveri, 23 km from Karur and 21 km from Kulithalai. The temple bells of Sellandiamman add to its charm.',
  },
  {
    title: 'Thanthonimalai — Then Tirupathi',
    img: 'images/temple.jpg',
    dist: '5 km',
    tag: 'Hill Temple',
    desc: 'Home of Lord Kalyana Venkataramana Swamy on a raised hillock, known as South Tirupathi. A pilgrimage site with commanding views of the town below.',
  },
  {
    title: 'Cauvery & Amaravathi Rivers',
    img: 'images/cauvery.jpg',
    dist: 'Through the District',
    tag: 'Nature · Confluence',
    desc: 'The district lies along the Kaveri and Amaravathi. At Thirumukkoodalur, the Kaveri, Amaravathi and Manimutharu rivers conflow — a beautiful sight built around the Agatheeswarar temple.',
  },
  {
    title: 'Amaravathi Riverside',
    img: 'images/amaravathi.jpg',
    dist: 'Karur City',
    tag: 'History · Roman Route',
    desc: 'The riverbed of the Amaravathi has yielded Roman coins, gold and silver rings and Tamil-Brahmi inscriptions — proof of Karur\'s ancient trade glory.',
  },
  {
    title: 'Karur City — Handloom Hub',
    img: 'images/city2.jpg',
    dist: 'District HQ',
    tag: 'Textiles · Commerce',
    desc: 'A blend of ancient heritage and modern industry. Karur\'s home textiles and made-ups reach Walmart, Target and IKEA stores around the world.',
  },
];

const cardGrid = document.getElementById('attraction-grid');

attractions.forEach((item, i) => {
  const card = document.createElement('div');
  card.className = 'card reveal';
  card.style.transitionDelay = `${(i % 3) * 0.1}s`;
  card.innerHTML = `
    <div class="card-img">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <span class="card-distance">${item.dist}</span>
    </div>
    <div class="card-body">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <span class="card-tag">${item.tag}</span>
    </div>
  `;
  cardGrid.appendChild(card);
  io.observe(card);
});

// ---------- Build Industries ----------
const industries = [
  { icon: '🧵', title: 'Handloom Textiles', desc: 'Bed, kitchen, toilet, table linen & wall hangings exported worldwide. ₹6,000 crore in annual foreign exchange.' },
  { icon: '🚌', title: 'Bus Body Building', desc: '95% of South Indian private bus bodies built in Karur. Over 200 builders, ~3,500 buses every year.' },
  { icon: '📄', title: 'TNPL Paper Mills', desc: 'One of India\'s largest paper producers, operating at Kagithapuram near Karur.' },
  { icon: '🏭', title: 'Cement Industry', desc: 'Chettinad Cement at Puliyur and Cheran Cement plants anchor the region\'s heavy industry.' },
  { icon: '🌾', title: 'Agriculture', desc: 'Paddy, cotton, sugarcane, groundnut and banana flourish on the banks of the Kaveri.' },
  { icon: '💎', title: 'Minerals & Granite', desc: 'Rich in granite at Thogamalai and K.Pitchampatty, plus gravel, clay and kankar.' },
];

const industryGrid = document.getElementById('industry-grid');

industries.forEach((item, i) => {
  const card = document.createElement('div');
  card.className = 'industry-card reveal';
  card.style.transitionDelay = `${(i % 3) * 0.1}s`;
  card.innerHTML = `
    <div class="industry-icon">${item.icon}</div>
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
  `;
  industryGrid.appendChild(card);
  io.observe(card);
});

// ---------- Reveal static sections ----------
document.querySelectorAll('.about-grid, .visit-grid, .culture-grid, .contact-row').forEach((el) => {
  el.classList.add('reveal');
  io.observe(el);
});

// ---------- Build Festivals ----------
const festivals = [
  { month: 'May', name: 'Kumbam Festival', desc: 'The grand Kumbam festival at Sri Mariamman temple in the heart of Karur unites all communities. Sacred water is carried from the river Amaravathi for the celebration.' },
  { month: 'January', name: 'Thaipoosam', desc: 'Celebrated in grand manner at the Kadambaneswarar temple, Kulithalai, during the Tamil month of Thai. Devotees carry kavadi in procession.' },
  { month: 'April–May', name: 'Chithirai & Bramotsavam', desc: 'Fifteen days of grand festivals at Ayyermalai\'s Rathinagreeswarar temple, followed by Panguni Uthiram, Karthigai and the float (Teppam) festival.' },
  { month: 'Throughout Year', name: 'Nerur Aradhanai', desc: 'Devotees from all over India visit the Jeeva Samadhi of saint Sadasiva Brahmendra at Nerur on the banks of the Kaveri, where the river flows south.' },
];

const festivalGrid = document.getElementById('festival-grid');

festivals.forEach((item, i) => {
  const card = document.createElement('div');
  card.className = 'festival-card reveal';
  card.style.transitionDelay = `${(i % 3) * 0.1}s`;
  card.innerHTML = `
    <span class="festival-month">${item.month}</span>
    <h3>${item.name}</h3>
    <p>${item.desc}</p>
  `;
  festivalGrid.appendChild(card);
  io.observe(card);
});

// ---------- Build Gallery ----------
const galleryImages = [
  { src: 'images/hero.jpg', caption: 'Karur City — District Headquarters' },
  { src: 'images/pasupathi.jpg', caption: 'Kalyana Pasupatheeswarar Temple' },
  { src: 'images/temple.jpg', caption: 'Thanthonimalai — Then Tirupathi' },
  { src: 'images/mayanur.jpg', caption: 'Mayanur Barrage on the Kaveri' },
  { src: 'images/cauvery.jpg', caption: 'River Kaveri through the District' },
  { src: 'images/amaravathi.jpg', caption: 'River Amaravathi at Karur' },
  { src: 'images/kulithalai.jpg', caption: 'Kadambaneswarar Temple, Kulithalai' },
  { src: 'images/handloom.jpg', caption: 'Handloom Weaving — Karur\'s Pride' },
  { src: 'images/city2.jpg', caption: 'Karur — Land of Handlooms & Minerals' },
];

const galleryGrid = document.getElementById('gallery-grid');

galleryImages.forEach((item, i) => {
  const el = document.createElement('div');
  el.className = 'gallery-item reveal';
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  el.innerHTML = `
    <img src="${item.src}" alt="${item.caption}" loading="lazy">
    <div class="gallery-caption">${item.caption}</div>
  `;
  el.addEventListener('click', () => openLightbox(i));
  galleryGrid.appendChild(el);
  io.observe(el);
});

// ---------- Lightbox ----------
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
  <button class="lightbox-close" aria-label="Close">&times;</button>
  <button class="lightbox-prev" aria-label="Previous">&#10094;</button>
  <img src="" alt="">
  <button class="lightbox-next" aria-label="Next">&#10095;</button>
  <div class="lightbox-caption"></div>
`;
document.body.appendChild(lightbox);

const lbImg = lightbox.querySelector('img');
const lbCaption = lightbox.querySelector('.lightbox-caption');
let lbIndex = 0;

function openLightbox(index) {
  lbIndex = index;
  renderLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderLightbox() {
  const item = galleryImages[lbIndex];
  lbImg.src = item.src;
  lbImg.alt = item.caption;
  lbCaption.textContent = item.caption;
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox-prev').addEventListener('click', (e) => {
  e.stopPropagation();
  lbIndex = (lbIndex - 1 + galleryImages.length) % galleryImages.length;
  renderLightbox();
});
lightbox.querySelector('.lightbox-next').addEventListener('click', (e) => {
  e.stopPropagation();
  lbIndex = (lbIndex + 1) % galleryImages.length;
  renderLightbox();
});
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') {
    lbIndex = (lbIndex - 1 + galleryImages.length) % galleryImages.length;
    renderLightbox();
  }
  if (e.key === 'ArrowRight') {
    lbIndex = (lbIndex + 1) % galleryImages.length;
    renderLightbox();
  }
});

// ---------- Reveal new sections ----------
document.querySelectorAll('.festival-grid, .gallery-grid, .help-grid').forEach((el) => {
  el.classList.add('reveal');
  io.observe(el);
});

// ---------- Contact form (demo) ----------
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  alert(`நன்றி! Thanks ${name || 'friend'}! Your message has been received (demo).`);
  contactForm.reset();
});
