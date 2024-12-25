// btn-hamburger
const btnHamburger = document.querySelector('.btn-hamburger');
const mobileNavbar = document.querySelector('.navbar-hero');
btnHamburger.addEventListener('click', () => {
  btnHamburger.classList.toggle('hamburger-active');
  mobileNavbar.classList.toggle('navbar-hero-show');
});

// Content after menu
const menuItems = document.querySelectorAll('.after-menu');
const sections = document.querySelectorAll('.page');

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const navbarScroll = navbar.offsetTop;
  if (window.pageYOffset > navbarScroll) {
    navbar.classList.add('navbar-bg');
  } else {
    navbar.classList.remove('navbar-bg');
  }
  let activeIndex = -1;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    if (
      window.innerHeight / 2 >= rect.top &&
      window.innerHeight / 2 <= rect.bottom
    ) {
      activeIndex = index;
    }
  });

  menuItems.forEach((item, index) => {
    if (index === activeIndex) {
      item.classList.add('menu-active');
    } else {
      item.classList.remove('menu-active');
    }
  });
});

// Klick menu navbar-hero
const childNavHero = document.querySelectorAll('.child-nav-hero');
childNavHero.forEach((child) => {
  child.addEventListener('click', () => {
    btnHamburger.classList.remove('hamburger-active');
    mobileNavbar.classList.remove('navbar-hero-show');
  });
});

window.addEventListener('click', (e) => {
  if (!btnHamburger.contains(e.target) && !mobileNavbar.contains(e.target)) {
    btnHamburger.classList.remove('hamburger-active');
    mobileNavbar.classList.remove('navbar-hero-show');
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    btnHamburger.classList.remove('hamburger-active');
    mobileNavbar.classList.remove('navbar-hero-show');
  }
});

// cara ambil tinggi suatu element
// const home = document.querySelector('.navbar');
// console.log(home.offsetHeight);

const navTargets = document.querySelectorAll(
  '.nav-hero-about, .nav-hero-services, .nav-hero-portfolio, .nav-hero-clients, .nav-hero-contact, .nav-desk-about, .nav-desk-services, .nav-desk-portfolio, .nav-desk-clients, .nav-desk-contact'
);

// Loop melalui setiap elemen dan tambahkan event listener
navTargets.forEach((navTarget) => {
  navTarget.addEventListener('click', (e) => {
    e.preventDefault();
    // Ambil ID target dari elemen
    const targetID = navTarget.dataset.target; // Menggunakan data attribute
    const targetElement = document.querySelector(`#${targetID}`);

    // Atur Y-offset
    const yOffset = -85;
    const yPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    // Scroll ke elemen target dengan efek smooth
    window.scrollTo({
      top: yPosition,
      behavior: 'smooth',
    });
  });
});

// swiper js
document.addEventListener('DOMContentLoaded', () => {
  const swiper1 = new Swiper('.swiper-services-content-image', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    centeredSlides: true,
    effect: 'cube',
    cubeEffect: {
      shadow: false,
    },
    grabCursor: true,
  });

  const swiper2 = new Swiper('.swiper-services-content-icon', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-services-content-icon .swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 6,
      },
      1024: {
        slidesPerView: 8,
      },
    },
    loop: true,
    centeredSlides: true,
    effect: 'slide',
    grabCursor: true,
  });

  const swiper3 = new Swiper('.portfolio-content-swiper-first', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      },
    },
    loop: true,
    centeredSlides: true,
    effect: 'slide',
    grabCursor: true,
  });

  const swiper4 = new Swiper('.portfolio-content-swiper-second', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      },
    },
    loop: true,
    centeredSlides: true,
    effect: 'slide',
    grabCursor: true,
  });
});
