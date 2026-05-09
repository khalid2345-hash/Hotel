// // Mobile Menu Toggle
// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.nav-menu');

// if (hamburger) {
//     hamburger.addEventListener('click', () => {
//         navMenu.classList.toggle('active');
//     });
// }

// // Smooth Scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// // Form Validation
// const bookingForm = document.getElementById('bookingForm');
// if (bookingForm) {
//     bookingForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         const checkin = document.getElementById('checkin').value;
//         const checkout = document.getElementById('checkout').value;
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;

//         // Validate dates
//         if (new Date(checkin) >= new Date(checkout)) {
//             alert('Check-out date must be after check-in date!');
//             return;
//         }

//         // Validate email
//         if (!validateEmail(email)) {
//             alert('Please enter a valid email address!');
//             return;
//         }

//         // Show success message
//         alert(`Booking confirmed for ${name}!\nA confirmation has been sent to ${email}`);
//         this.reset();
//     });
// }

// // Email Validation
// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// }

// // Intersection Observer for Animations
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver(function(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
//             observer.unobserve(entry.target);
//         }
//     });
// }, observerOptions);

// // Observe all cards
// document.querySelectorAll('.room-card, .amenity, .review-card, .info-box').forEach(el => {
//     el.style.opacity = '0';
//     observer.observe(el);
// });

// // Navbar Shadow on Scroll
// const navbar = document.querySelector('.navbar');
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//         navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
//     } else {
//         navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
//     }
// });

// // Room Selection
// document.querySelectorAll('.room-btn').forEach(btn => {
//     btn.addEventListener('click', function() {
//         const roomName = this.parentElement.querySelector('h3').textContent;
//         alert(`${roomName} selected! Proceed to booking form to complete your reservation.`);
//         document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
//     });
// });

// // Set minimum checkout date
// const checkinInput = document.getElementById('checkin');
// const checkoutInput = document.getElementById('checkout');

// if (checkinInput && checkoutInput) {
//     checkinInput.addEventListener('change', function() {
//         const checkinDate = new Date(this.value);
//         checkinDate.setDate(checkinDate.getDate() + 1);
//         checkoutInput.min = checkinDate.toISOString().split('T')[0];
//     });
// }

// // Set today as minimum check-in date
// if (checkinInput) {
//     const today = new Date().toISOString().split('T')[0];
//     checkinInput.min = today;
// }

// // Ripple effect on buttons
// document.querySelectorAll('.submit-btn, .room-btn, .cta-button').forEach(btn => {
//     btn.addEventListener('click', function(e) {
//         const ripple = document.createElement('span');
//         const rect = this.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
        
//         ripple.style.left = x + 'px';
//         ripple.style.top = y + 'px';
//         ripple.classList.add('ripple');
        
//         this.appendChild(ripple);
        
//         setTimeout(() => {
//             ripple.remove();
//         }, 600);
//     });
// });

// // Counter Animation for Statistics
// function animateCounter(element, target, duration = 2000) {
//     let current = 0;
//     const increment = target / (duration / 16);
    
//     const timer = setInterval(() => {
//         current += increment;
//         if (current >= target) {
//             element.textContent = target;
//             clearInterval(timer);
//         } else {
//             element.textContent = Math.floor(current);
//         }
//     }, 16);
// }

// // Log on page load
// console.log('Chalon Suites Website Loaded Successfully!');

/* MOBILE MENU */

const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

/* MOBILE DROPDOWN */

const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", () => {

    if(window.innerWidth <= 900){
        dropdown.classList.toggle("active");
    }

});