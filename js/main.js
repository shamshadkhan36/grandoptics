/**
 * Grand Optical - Main Client-Side Script
 * Handles navigation interactions, sticky header, mobile drawer,
 * product filtering, and WhatsApp inquiry helpers.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Functionality
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    const toggleMenu = () => {
      const isOpen = navMenu.classList.contains('open');
      menuToggle.classList.toggle('active', !isOpen);
      navMenu.classList.toggle('open', !isOpen);
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      document.body.style.overflow = isOpen ? '' : 'hidden';
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          toggleMenu();
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu();
      }
    });

    // Close on clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && 
          !navMenu.contains(e.target) && 
          !menuToggle.contains(e.target)) {
        toggleMenu();
      }
    });
  }

  // 2. Sticky Header Elevation on Scroll
  const siteHeader = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Active Nav Link Highlight based on Scroll Position (ScrollSpy)
  const sections = document.querySelectorAll('section[id]');
  const updateActiveNavLink = () => {
    const scrollPos = window.scrollY + 160;
    let currentSectionId = 'home';

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (window.scrollY < 100) {
      currentSectionId = 'home';
    }

    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // 4. Product Category Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (filterBtns.length > 0 && productCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active state from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter') || 'all';

        productCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 5. WhatsApp Message Pre-fill Helper
  // Ensures every WhatsApp link opens cleanly in either web or app
  const waButtons = document.querySelectorAll('a[data-wa-product]');
  waButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productName = btn.getAttribute('data-wa-product');
      if (productName) {
        const text = `Hello Grand Optical, I am interested in ${productName}. Please share more details.`;
        const phone = '919594506701';
        btn.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
      }
    });
  });

  // 6. Dynamic Year in Footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
