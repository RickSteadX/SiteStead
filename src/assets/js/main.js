// Import required libraries
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper/bundle';
import Typed from 'typed.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize components
  initLoader();
  initCustomCursor();
  initMobileMenu();
  initThemeToggle();
  initTypedText();
  initScrollReveal();
  initSkillBars();
  initProjectsSwiper();
  initParallaxEffects();
  initSkills3D();
  initSmoothScroll();
  initFormValidation();
});

// Loader animation
function initLoader() {
  const loader = document.querySelector('.loader');
  
  // Simulate loading time (remove in production and use actual load events)
  setTimeout(() => {
    gsap.to(loader, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        loader.classList.add('hidden');
      }
    });
  }, 1500);
}

// Custom cursor
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const links = document.querySelectorAll('a, button');
  
  // Only initialize on non-touch devices
  if (!('ontouchstart' in window)) {
    document.addEventListener('mousemove', (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power1.out'
      });
      
      // Show cursor after first movement
      if (cursor.style.opacity === '0' || !cursor.style.opacity) {
        cursor.style.opacity = '1';
      }
    });
    
    // Cursor effects on interactive elements
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        cursor.style.width = '60px';
        cursor.style.height = '60px';
        cursor.style.borderColor = 'var(--color-accent)';
      });
      
      link.addEventListener('mouseleave', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.borderColor = 'var(--color-accent)';
      });
    });
    
    // Hide cursor when it leaves the window
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });
  } else {
    // Hide cursor on touch devices
    cursor.style.display = 'none';
  }
}

// Mobile menu toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav__link');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking on nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
}

// Theme toggle (dark/light mode)
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme preference or use system preference
  const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
  
  // Set initial theme
  if (currentTheme === 'light') {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  }
  
  // Toggle theme on click
  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  });
}

// Typed.js text animation
function initTypedText() {
  const typedElement = document.getElementById('typed-text');
  
  if (typedElement) {
    new Typed(typedElement, {
      strings: [
        'scalable microservices.',
        'high-performance APIs.',
        'cloud-native applications.',
        'secure backend systems.',
        'optimized databases.'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }
}

// Scroll reveal animations
function initScrollReveal() {
  // Add reveal classes to elements
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    // Create scroll trigger for each section
    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => section.classList.add('reveal', 'active'),
      once: true
    });
  });
  
  // Staggered animations for skills
  const skillsCategory = document.querySelectorAll('.skills__category');
  skillsCategory.forEach(category => {
    ScrollTrigger.create({
      trigger: category,
      start: 'top 80%',
      onEnter: () => category.classList.add('stagger-reveal', 'active'),
      once: true
    });
  });
  
  // Experience timeline animations
  const experienceItems = document.querySelectorAll('.experience__item');
  experienceItems.forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      x: index % 2 === 0 ? -30 : 30,
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        once: true
      },
      duration: 0.8,
      ease: 'power2.out'
    });
  });
}

// Animate skill bars
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar__progress');
  
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.setProperty('--progress', width);
    
    ScrollTrigger.create({
      trigger: bar,
      start: 'top 90%',
      onEnter: () => bar.classList.add('animate'),
      once: true
    });
  });
}

// Initialize projects swiper
function initProjectsSwiper() {
  const projectsSwiper = new Swiper('.projects-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      640: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
}

// Parallax effects
function initParallaxEffects() {
  // Hero section parallax
  const heroShapes = document.querySelectorAll('.hero__shape');
  
  window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    heroShapes.forEach((shape, index) => {
      const speed = (index + 1) * 20;
      const xOffset = (x - 0.5) * speed;
      const yOffset = (y - 0.5) * speed;
      
      gsap.to(shape, {
        x: xOffset,
        y: yOffset,
        duration: 1,
        ease: 'power1.out'
      });
    });
  });
  
  // Scroll parallax for sections
  gsap.utils.toArray('.section').forEach(section => {
    const depth = section.getAttribute('data-parallax-depth') || 0.1;
    
    gsap.to(section, {
      y: () => window.innerHeight * depth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
}

// 3D skills visualization using Three.js
function initSkills3D() {
  const container = document.getElementById('skills-3d');
  
  if (!container) return;
  
  // Create scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);
  
  // Create particles
  const particleCount = 1000;
  const particles = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  const colorPrimary = new THREE.Color(0x64FFDA);
  const colorSecondary = new THREE.Color(0xFFD700);
  
  for (let i = 0; i < particleCount; i++) {
    // Position
    const radius = 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
    
    // Color
    const color = i % 2 === 0 ? colorPrimary : colorSecondary;
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  
  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  const particleMaterial = new THREE.PointsMaterial({
    size: 0.1,
    vertexColors: true,
    transparent: true,
    opacity: 0.8
  });
  
  const particleSystem = new THREE.Points(particles, particleMaterial);
  scene.add(particleSystem);
  
  // Add text labels for skills
  const skillLabels = [
    { text: 'Python', position: new THREE.Vector3(3, 2, 0) },
    { text: 'Go', position: new THREE.Vector3(-3, 1, 2) },
    { text: 'Java', position: new THREE.Vector3(0, -3, 2) },
    { text: 'Node.js', position: new THREE.Vector3(2, -1, -3) },
    { text: 'PostgreSQL', position: new THREE.Vector3(-2, 3, -1) },
    { text: 'MongoDB', position: new THREE.Vector3(1, -2, -2) },
    { text: 'Docker', position: new THREE.Vector3(-1, -1, 3) }
  ];
  
  // Position camera
  camera.position.z = 8;
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    particleSystem.rotation.x += 0.001;
    particleSystem.rotation.y += 0.002;
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
  
  // Interactive rotation on mouse move
  container.addEventListener('mousemove', (e) => {
    const x = (e.clientX / container.clientWidth) - 0.5;
    const y = (e.clientY / container.clientHeight) - 0.5;
    
    gsap.to(particleSystem.rotation, {
      x: y * 0.5,
      y: x * 0.5,
      duration: 1,
      ease: 'power1.out'
    });
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Form validation
function initFormValidation() {
  const form = document.querySelector('.contact__form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form fields
      const nameField = document.getElementById('name');
      const emailField = document.getElementById('email');
      const subjectField = document.getElementById('subject');
      const messageField = document.getElementById('message');
      
      // Simple validation
      let isValid = true;
      
      if (!nameField.value.trim()) {
        markInvalid(nameField, 'Please enter your name');
        isValid = false;
      } else {
        markValid(nameField);
      }
      
      if (!emailField.value.trim()) {
        markInvalid(emailField, 'Please enter your email');
        isValid = false;
      } else if (!isValidEmail(emailField.value)) {
        markInvalid(emailField, 'Please enter a valid email');
        isValid = false;
      } else {
        markValid(emailField);
      }
      
      if (!subjectField.value.trim()) {
        markInvalid(subjectField, 'Please enter a subject');
        isValid = false;
      } else {
        markValid(subjectField);
      }
      
      if (!messageField.value.trim()) {
        markInvalid(messageField, 'Please enter your message');
        isValid = false;
      } else {
        markValid(messageField);
      }
      
      // If form is valid, submit (or show success message in this demo)
      if (isValid) {
        // In a real application, you would send the form data to a server
        // For this demo, we'll just show a success message
        form.innerHTML = `
          <div class="form__success">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="form__success-icon">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/>
            </svg>
            <h3 class="form__success-title">Message Sent!</h3>
            <p class="form__success-text">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        `;
      }
    });
  }
  
  // Helper functions for form validation
  function markInvalid(field, message) {
    field.classList.add('invalid');
    
    // Create or update error message
    let errorElement = field.parentElement.querySelector('.form__error');
    
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'form__error';
      field.parentElement.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
  }
  
  function markValid(field) {
    field.classList.remove('invalid');
    
    // Remove error message if it exists
    const errorElement = field.parentElement.querySelector('.form__error');
    if (errorElement) {
      errorElement.remove();
    }
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

// Header scroll effects
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Hide header on scroll down, show on scroll up
  const currentScrollPos = window.pageYOffset;
  
  if (currentScrollPos > lastScrollPos && currentScrollPos > 200) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  
  lastScrollPos = currentScrollPos;
});

// Track last scroll position for header show/hide
let lastScrollPos = 0;

// Initialize particles background
function initParticles() {
  const particlesContainer = document.getElementById('particles-js');
  
  if (particlesContainer && window.particlesJS) {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#64FFDA'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#64FFDA',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }
}

// Call particles initialization after a delay to ensure DOM is ready
setTimeout(initParticles, 1000);